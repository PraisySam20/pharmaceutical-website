import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function MyComponent2()
{
	//   const [product, setProduct] = useState([])
	const [wishlist, setWishlist] = useState([]);
	const [successMessage, setSuccessMessage] = useState("");
	const [productDetails, setProductDetails] = useState(null);

	//   const products = [
	//     {
	//       name: "Product 1",
	//       price: 1234,
	//       indications: "Indication 1",
	// 	  imageUrl: "https://example.com/product1.jpg",
	//       availability: [
	//         { name: "Location 1", quantity: 10 },
	//         { name: "Location 2", quantity: 20 },
	//         { name: "Location 3", quantity: 30 },
	//       ],
	//     },
	//   ];

	//   const [products, setProducts] = useState([]);
	const { medID } = useParams();


	const [product, setProduct] = useState(null);

	const fetchProduct = async () => {
		try {
		  const response = await axios.get(`http://localhost:3001/products/${medID}`, {medID: medID});
		  const result = response.data;
	
		  console.log('Fetched product:', result);
	
		  const base64String = btoa(String.fromCharCode(...new Uint8Array(result.Image.data)));
		  const productWithBase64Image = {
			...result,
			Image: `data:image/jpeg;base64,${base64String}`
		  };
		  console.log('Product with base64 image:', productWithBase64Image);
	
		  setProduct(productWithBase64Image);
		} catch (error) {
		  console.error('Error fetching product data:', error);
		}
	  };
	
	  useEffect(() => {
		fetchProduct();
	  }, [medID]);

	  const addToWishlist = async () => {
		if (!product) return;
		try {
		  const response = await axios.post('http://localhost:3001/api/wishlist', {
			medID: product.medID,
			medName: product.medName,
			price: product.price,
			Image: product.Image
			// price: product.price, // Assuming you have a price field in your product object
		  });
		  if (response.status === 201) {
			setSuccessMessage("Product added to wishlist!");
		  }
		} catch (error) {
		  console.error('Error adding product to wishlist:', error);
		}
	  };

	//   useEffect(() => {
	// 	medID="m003"
	//     fetch(`http://localhost:3000/api/products`)
	//       .then(response => {
	//         if (response.ok) {
	//           return response.json();
	//         } else {
	//           throw new Error('Product not found');
	//         }
	//       })
	//       .then(data => {
	//         // Update the state with the fetched data
	//         setProductDetails(data);
	// 		console.log(productDetails);
	//       })
	//       .catch(error => console.error('Error fetching product details:', error));
	//   }, []);

	return (
		<PageWrapper>
			<ContentWrapper>
				<Sidebar>
					<CompanyInfo>
						<CompanyDetails>
							<CompanyLogo
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/598df7151c6f87d38af8e4418e12634310a0d2d35d44ffcb2c12ec5dd28caa1d?apiKey=9327c602173a48d9b833464b95d13b13&"
								alt="Company Logo"
							/>
							<CompanyAddress>
								Company Location: <br /> Chennai <br /> Bengaluru <br /> Mumbai
							</CompanyAddress>
						</CompanyDetails>
						<Divider />
						<ContactDetails>
							Contact Details: <br /> 1234567890
						</ContactDetails>
						<Divider />
						<EmailDetails>
							E-mail ID: <br /> vitalamted@gmail.com
						</EmailDetails>
						<Divider />
						<FeedbackDetails>
							Feedback: <br /> customerabc@gmail.com
						</FeedbackDetails>
						<Divider />
					</CompanyInfo>
				</Sidebar>
				<MainContent>
					<Header>
						<HeaderContent>
							<HeaderTitle>•VITALATMED•</HeaderTitle>
							<HeaderIcons>
								<Link to="/wish">
									<HeaderIcon
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea57f163c79d24c418f2a57f0fe1b7d7a4b9b43b84ca7ff114166382071981d7?apiKey=9327c602173a48d9b833464b95d13b13&"
										alt="Header Icon 1"
									/>
								</Link>
								<Link to="/profile">
									<HeaderIcon
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/30867a6645cba26f959d6d271becca18b4586999975227817e3044bc80042e03?apiKey=9327c602173a48d9b833464b95d13b13&"
										alt="Header Icon 2"
									/>
								</Link>
							</HeaderIcons>
						</HeaderContent>
					</Header>
					<ProductDetails>
						<ProductInfo>
							<ProductImageWrapper>
							</ProductImageWrapper>
							<ProductSpecs>
								<ProductSpecsWrapper>
									{product ? (
										<div>
											<h1>{product.medName}</h1>
											<img src={product.Image} alt={product.medName} />
										</div>
									) : (
										<p>Loading...</p>)}
                </ProductSpecsWrapper>
							</ProductSpecs>
						</ProductInfo>
						<ProductAvailability>
							<AvailabilityLabel>Available in:</AvailabilityLabel>
							<AvailabilityList>
								{/* {products[0].availability.map((item, index) => (
                  <AvailabilityItem key={index}>
                    {item.name} - {item.quantity} Boxes
                  </AvailabilityItem>
                ))} */}
							</AvailabilityList>
						</ProductAvailability>
						<WishlistButton onClick={addToWishlist}>
							ADD TO WISHLIST
						</WishlistButton>
						{successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
					</ProductDetails>
				</MainContent>
			</ContentWrapper>
		</PageWrapper>
	);
}

const PageWrapper = styled.div`
  background-color: #fff;
  padding-right: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Sidebar = styled.aside`
  width: 18%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const CompanyInfo = styled.div`
  background-color: #182744;
  color: #42a5bb;
  font-size: 20px;
  font-weight: 400;
  height: 100%;
  padding: 17px 20px 280px;

  @media (max-width: 991px) {
    margin-top: 8px;
  }
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const CompanyLogo = styled.img`
  width: 200px;
  aspect-ratio: 1.16;
  object-fit: auto;
  object-position: center;
  box-shadow: 0px 0px 0px 0 #000;
  margin-left: 1px;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const CompanyAddress = styled.address`
  font-family: Jost, sans-serif;
  margin-top: 16px;
  font-style: normal;
  margin-left: -10px;
`;

const Divider = styled.hr`
  border: 1px solid #9bd4cb;
  background-color: #9bd4cb;
  margin-top: 21px;
  height: 1px;
`;

const ContactDetails = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 28px;
`;

const EmailDetails = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 31px;
`;

const FeedbackDetails = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 19px;
`;

const MainContent = styled.main`
  width: 82%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Header = styled.header`
  margin-top: 4px;

  @media (max-width: 991px) {
    margin-top: 12px;
  }
`;

const HeaderContent = styled.div`
  background-color: rgba(155, 212, 203, 0.5);
  display: flex;
  width: 98%;
  align-items: flex-start;
  margin-left: -35px;
  gap: 20px;
  padding: 0 28px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const HeaderTitle = styled.h1`
  color: #182744;
  margin: auto 0;
  font: 700 30px jsMath-cmbx10, sans-serif;
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  margin-top: -4px;
  margin-left: auto; /* Align icons to the rightmost corner */
`;

const HeaderIcon = styled.img`
  width: 70px;
  aspect-ratio: 0.96;
  object-fit: auto;
  object-position: center;
  cursor: pointer;

  &:last-child {
    aspect-ratio: 0.93;
  }
`;

const ProductDetails = styled.section`
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 50px;
  max-width: 881px;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const ProductImageWrapper = styled.div`
  width: 58%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProductImage = styled.div`
  background-color: #d9d9d9;
  width: 290px;
  max-width: 100%;
  height: 270px;
  margin: 0 auto;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductSpecs = styled.div`
  width: 42%;
  margin-left: -500px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProductSpecsWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-self: stretch;
  font-size: 25px;
  color: #000;
  font-weight: 500;
  margin: auto 0;

  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const ProductLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProductLabel = styled.div`
  font-family: Jost, sans-serif;
`;

const PriceLabel = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 49px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const IndicationsLabel = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 49px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductValues = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProductName = styled.div`
  font-family: Jost, sans-serif;
`;

const ProductPrice = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 49px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductIndications = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 49px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductAvailability = styled.div`
  display: flex;
  gap: 10px;
  font-size: 25px;
  color: #000;
  font-weight: 500;
  margin-top: 100px;
  margin-left: 100px;
  align-self: left;
  margin-right: 300px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const AvailabilityLabel = styled.div`
  font-family: Jost, sans-serif;
  align-self: left;
`;

const AvailabilityList = styled.div`
  font-family: Jost, sans-serif;
  flex-grow: 1;
`;

const AvailabilityItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const WishlistButton = styled.button`
  border-radius: 13px;
  background-color: #182744;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 50px;
  align-self: center;
  font: 500 25px Jost, sans-serif;

  &:hover {
    background-color:#2b3b55;
  }
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 10px;
  align-self: center;
  font: 600 25px Jost, sans-serif;
`;

export default MyComponent2;
