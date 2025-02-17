
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function MyComponent() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/products');
      const result = await response.json();

	  console.log('Fetched products:', result);

      // Assuming result is an array of objects containing medID, medName, and Image
      const productsWithBase64Images = result.map(product => {
        const base64String = btoa(String.fromCharCode(...new Uint8Array(product.Image.data)));
        return {
          ...product,
          Image: `data:image/jpeg;base64,${base64String}`
        };
      });
	  console.log('Products with base64 images:', productsWithBase64Images);

      setProducts(productsWithBase64Images);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };  

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <PageWrapper>
      <PageContent>
        <Sidebar>
          <CompanyInfo>
            <CompanyDetails>
              <CompanyLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/598df7151c6f87d38af8e4418e12634310a0d2d35d44ffcb2c12ec5dd28caa1d?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Company Logo" />
              <CompanyAddress>
                Company Location: <br /> Chennai <br /> Bengaluru <br/> Mumbai
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
                  <HeaderIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea57f163c79d24c418f2a57f0fe1b7d7a4b9b43b84ca7ff114166382071981d7?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Header Icon 1" />
                </Link>
                <Link to="/profile">
                  <HeaderIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/30867a6645cba26f959d6d271becca18b4586999975227817e3044bc80042e03?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Header Icon 2" />
                </Link>
              </HeaderIcons>
            </HeaderContent>

            <SearchBar>
              <SearchInput>
                <SearchIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/282fe3371fb03ec1a957ce32f5be00fedce29376a794db1845f9e6a27c1d327e?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Search Icon" />
                <SearchInputField placeholder="Search" />
              </SearchInput>
            </SearchBar>
          </Header>
          <ProductSection>
            <ProductImages>
              {products.map((product) => (
                <ProductImageWrapper key={product.medID}>
                  <ProductImage src={product.Image} alt={product.medName} />
                  <ProductName>{product.medName}</ProductName>
                  <ViewProductButton onClick={() => navigate(`MyComponent2/${product.medID}`)}>
                    View Product
                  </ViewProductButton>
                </ProductImageWrapper>
              ))}
            </ProductImages>
          </ProductSection>
        </MainContent>
      </PageContent>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #fff;
  padding-right: 8px;
`;

const PageContent = styled.div`
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
  padding: 0 10px;
  
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
  margin-left: auto;
`;

const HeaderIcon = styled.img`
  width: 70px;
  aspect-ratio: 0.96;
  object-fit: auto;
  object-position: center;
  
  &:last-child {
    aspect-ratio: 0.93;
  }
`;

const SearchBar = styled.div`
  max-width: 463px;
  margin: 44px 0 0 39px;
  
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SearchInput = styled.div`
  background-color: rgba(155, 212, 203, 0.75);
  border-radius: 10px;
  color: #42a5bb;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  gap: 17px;
  padding: 10px 26px 3px 17px;
  
  @media (max-width: 991px) {
    padding-right: 20px;
    white-space: initial;
  }
`;

const SearchIcon = styled.img`
  width: 25px;
  aspect-ratio: 1.19;
  object-fit: auto;
  object-position: center;
`;

const SearchText = styled.span`
  font-family: Jost, sans-serif;
`;

const SearchInputField = styled.input`
  border: none;
  outline: none;
  
  background: transparent;
  font-size: 20px;
  color: #42a5bb;
`;

const ProductSection = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 87px;
  
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ProductImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 170px;
  
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

const ProductImage = styled.img`
  width: 250px;
  height: 100%;
  border-radius: 10px;
  margin-left: 140px; // Space on the left side
  margin-right: 10px; // Space on the right side
  margin-bottom: 20px; // Space between rows of images
`;

const ProductName = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: -100px;
  font-size: 25px;
  font-weight: 600;
  color: #182744;
`;

const ViewProductButton = styled.button`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: -100px;
  padding: 10px 20px;
  font-size: 20px;
  color: white;
  background-color: #182744;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2b3b55;
  }
`;

// const ProductSection = styled.section`
//   display: flex;
//   gap: 20px;
//   margin-top: 87px;
  
//   @media (max-width: 991px) {
//     flex-direction: column;
//     align-items: center; // Center items on smaller screens
//   }
// `;

// const ProductImages = styled.div`
//   display: flex;
//   flex-direction: column; // Stack images vertically
//   gap: 250px; // Space between image and product name
  
//   @media (max-width: 991px) {
//     align-items: center; // Center items on smaller screens
//   }
// `;

// const ProductImageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 200px;
// `;

// const ProductImage = styled.img`
//   width: 280px;
//   height: auto;
//   border-radius: 10px;
//   margin-left:150px;
// `;

// const ProductName = styled.div`
// margin-top: -240px; /* Move the product name higher */
// margin-right:-300px;
//   margin-left: auto; /* Move the product name towards the right */
//   align-self: flex-end; /* Align the product name to the end of the container */
//   font-size: 25px;
//   font-weight: 600;
//   color: #182744;
// `;


// const ViewProductButton = styled.button`
//   margin-top: 30px;
//   margin-right:-700px;
//   padding: 10px 20px;
//   font-size: 25px;
//   color: white;
//   background-color: #182744;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #2b3b55;
//   }
// `;


export default MyComponent;

