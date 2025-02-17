//***Create Account Page***
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Create an Express application
const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
	origin: 'http://localhost:3000', // Replace with your React app URL if different
  }));
  app.use(express.json());
app.use(bodyParser.json());

//Database connection
const pool = mysql.createPool({
  host: 'localhost', // replace with your MySQL host
  user: 'root', // replace with your MySQL user
  password: '', // replace with your MySQL password
  database: 'vitalamted', // replace with your MySQL database name
});

// const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'your_username',
//   password: 'your_password',
//   database: 'your_database_name'
// });

const promisePool = pool.promise();

// User registration endpoint
app.post('/api/user/register', async (req, res) => {
  const { fullName, email, phoneNumber, gender, password } = req.body;

  if (!fullName || !email || !phoneNumber || !gender || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const [existingUser] = await promisePool.query('SELECT * FROM user WHERE userEmail = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const [result] = await promisePool.query(
      'INSERT INTO user (userName, userEmail, userPhone, Sex, password) VALUES (?, ?, ?, ?, ?)',
      [fullName, email, phoneNumber, gender, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ***Login Page***

// User login endpoint
app.post('/api/user/login', async (req, res) => {
	const { email, password } = req.body;
  
	if (!email || !password) {
	  return res.status(400).json({ message: 'Email and password are required' });
	}
  
	try {
	  // Check if the user exists
	  const [users] = await promisePool.query('SELECT * FROM user WHERE userEmail = ?', [email]);
	  const user = users[0];
  
	  if (!user) {
		return res.status(400).json({ message: 'Invalid email or password' });
	  }
  
	  // Compare the hashed password
	  const isPasswordValid = await bcrypt.compare(password, user.password);
	  if (!isPasswordValid) {
		return res.status(400).json({ message: 'Invalid email or password' });
	  }
  
	  // Generate a token or session (this is a simple example, you should use JWT or similar in production)
	  // For simplicity, we return a success message
	  res.status(200).json({ message: 'Login successful', user: { email: user.email, fullName: user.full_name } });
	} catch (error) {
	  console.error('Error logging in user:', error);
	  res.status(500).json({ message: 'Internal server error' });
	}
  });

  app.delete('/wishlist/:medID', (req, res) => {
	const medID = req.params.medID;
	const query = 'DELETE FROM wishlist WHERE medID = ?';
	pool.query(query, [medID], (err, results) => {
	  if (err) {
		console.error('Error deleting item:', err);
		res.status(500).json({ error: 'Failed to delete item' });
		return;
	  }
	  res.status(200).json({ message: 'Item deleted successfully' });
	});
  });
// ***MyComponents**
app.use(cors({
	origin: 'http://localhost:3000', // Replace with your React app URL if different
  }));
  app.use(express.json());
  
  app.get('/api/products', (req, res) => {
	const query = 'SELECT medID, medName, Image FROM medicines';
	pool.query(query, (error, results) => {
	  if (error) {
		console.error('Error fetching data from database: ', error);
		res.status(500).send('Internal Server Error');
	  } else {
		res.json(results);
	  }
	});
  });
  
  // Serve React frontend
//   app.use(express.static(path.join(__dirname, 'build')));
//   app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//   });


// ***MyComponents2***
// Mock data for wishlist
let wishlist = [];

// Middleware to parse JSON request body
app.use(express.json());

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/products', (req, res) => {
	res.json(products);
  });

// Route to get the wishlist
// Route to fetch wishlist data
app.get('/wishlist', (req, res) => {
	// Perform a SELECT query to fetch wishlist data
	const query = 'SELECT * FROM wishlist';
  
	pool.query(query, (err, results) => {
	  if (err) {
		console.error('Error fetching wishlist data:', err);
		res.status(500).json({ error: 'Failed to fetch wishlist data' });
		return;
	  }
	  // Send the fetched data as JSON response
	  res.json(results);
	});
  });

// Route to add a product to the wishlist
// app.post('/api/wishlist', async (req, res) => {
// 	const {medId, medName, price} = req.body;
  
// 	if (!name || !price || !indications || !imageUrl || !availability) {
// 	  return res.status(400).json({ error: 'Missing required fields' });
// 	}
  
// 	try {
// 	  const query = `
// 		INSERT INTO wishlist (medId, medName, price)
// 		set ?;
// 	  `;
// 	  const values = [medId, medName, price];
// 	  const { rows } = await pool.query(query, values);
// 	  res.status(201).json(rows[0]);
// 	} catch (error) {
// 	  console.error('Error adding to wishlist:', error);
// 	  res.status(500).json({ error: 'Internal Server Error' });
// 	}
//   });

  app.get('/api/products/selected', (req, res) => {
	const selectedDetails = products.map(product => ({
	  name: product.name,
	  price: product.price,
	}));
	res.json(selectedDetails);
  });

  app.get('/api/products', (req, res) => {
	const query = 'SELECT medID, medName, Image FROM medicines';
	pool.query(query, (err, results) => {
	  if (err) {
		console.error('Error fetching data from database:', err);
		res.status(500).send('Error fetching data');
		return;
	  }
	  res.json(results);
	});
  });
  
  // Endpoint to fetch a product by medID
  app.get('/products/:medID', (req, res) => {
	const medID = req.params.medID;
	const query = 'SELECT medID, medName,price, Image FROM medicines WHERE medID = ?';
	pool.query(query, [medID], (err, results) => {
	  if (err) {
		console.error('Error fetching data from database:', err);
		res.status(500).send('Error fetching data');
		return;
	  }
	  if (results.length === 0) {
		res.status(404).send('Product not found');
		return;
	  }
	  res.json(results[0]);
	});
  });

  // Endpoint to add a product to the wishlist
app.post('/api/wishlist', (req, res) => {
	const { medID, medName, price, Image } = req.body;
	const query = 'INSERT INTO wishlist (medID, medName, price, Image) VALUES ( ?, ?, ?, ?)';
	pool.query(query, [medID, medName, price, Image], (err, results) => {
	  if (err) {
		console.error('Error adding product to wishlist:', err);
		res.status(500).send('Error adding product to wishlist');
		return;
	  }
	  res.status(201).send('Product added to wishlist');
	});
  });

//   app.get('/api/products/:medID', async (req, res) => {
// 	const medID = req.params.medID;
  
// 	try {
// 	  const query = `
// 		SELECT name, price
// 		FROM products
// 		WHERE med_id = "m001"
// 	  `;
// 	  const values = [medID];
// 	  const { rows } =  pool.query(query, values);
  
// 	  if (rows.length === 0) {
// 		return res.status(404).json({ error: 'Product not found' });
// 	  }
  
// 	  const { name, price } = rows[0];
// 	  res.json({ name, price });
// 	  console.log({name, price});
	  
// 	} catch (error) {
// 	  console.error('Error fetching product details:', error);
// 	  res.status(500).json({ error: 'Internal Server Error' });
// 	}
//   });



// // ***WishList***
// // Serve static files from the 'build' directory
// // app.use(express.static(path.join(__dirname, 'build')));

// // Serve the index.html file for any route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// API endpoint to fetch products
// app.get('/api/products', (req, res) => {
// 	const query = 'SELECT medID, medName, Image FROM medicines';
// 	pool.query(query, (error, results) => {
// 	  if (error) {
// 		console.error('Error fetching data from database: ', error);
// 		res.status(500).send('Internal Server Error');
// 	  } else {
// 		res.json(results);
// 	  }
// 	});
//   });

//   app.get('/api/products/:medID', (req, res) => {
// 	const medID = req.params.medID;
// 	const query = 'SELECT medID, medName, Image FROM medicines WHERE medID = ?';
// 	db.query(query, [medID], (err, results) => {
// 	  if (err) {
// 		console.error('Error fetching data from database:', err);
// 		res.status(500).send('Error fetching data');
// 		return;
// 	  }
// 	  if (results.length === 0) {
// 		res.status(404).send('Product not found');
// 		return;
// 	  }
// 	  res.json(results[0]);
// 	});
//   });
  
//   // Serve React frontend
//   app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//   });




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

