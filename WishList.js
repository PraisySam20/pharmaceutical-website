// // import styled from "styled-components";
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // // const products = [
// // // 	{
// // // 		name: "XXXX",
// // // 		price: "12345",
// // // 		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f07f1f11b494ef9cb27776378029f584a851b08215d8ef9f6c28679f34001a37?apiKey=9327c602173a48d9b833464b95d13b13&",
// // // 	},
// // // 	{
// // // 		name: "XXXX",
// // // 		price: "12345",
// // // 		image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f07f1f11b494ef9cb27776378029f584a851b08215d8ef9f6c28679f34001a37?apiKey=9327c602173a48d9b833464b95d13b13&",
// // // 	},
// // // ];

// // function WishList()
// // {
// // 	const [wishlist, setWishlist] = useState([]);
// // 	const [deleteMessage, setDeleteMessage] = React.useState("");
// // 	const [errorMessage, setErrorMessage] = useState("");

// // 	useEffect(() =>
// // 	{
// // 		// Fetch wishlist data from the backend when the component mounts
// // 		axios.get("http://localhost:3001/wishlist")
// // 			.then(response =>
// // 			{
// // 				// Update the wishlist state with the fetched data
// // 				setWishlist(response.data);
// // 			})
// // 			.catch(error =>
// // 			{
// // 				console.error('Error fetching wishlist data:', error);
// // 				setErrorMessage("Failed to fetch wishlist data");
// // 			});
// // 	}, []);

// // 	const handleDelete = () =>
// // 	{
// // 		setDeleteMessage("Deleted!");
// // 		setTimeout(() =>
// // 		{
// // 			setDeleteMessage("");
// // 		}, 2000); // Hide the message after 2 seconds
// // 	};

// // 	return (
// // 		<PageWrapper>
// // 			<PageContent>
// // 				<Sidebar>
// // 					<CompanyInfo>
// // 						<CompanyDetails>
// // 							<CompanyLogo
// // 								loading="lazy"
// // 								src="https://cdn.builder.io/api/v1/image/assets/TEMP/598df7151c6f87d38af8e4418e12634310a0d2d35d44ffcb2c12ec5dd28caa1d?apiKey=9327c602173a48d9b833464b95d13b13&"
// // 								alt="Company Logo"
// // 							/>
// // 							<CompanyAddress>
// // 								Company Location: <br /> Chennai <br /> Bengaluru <br /> Mumbai
// // 							</CompanyAddress>
// // 						</CompanyDetails>
// // 						<Divider />
// // 						<ContactDetails>
// // 							Contact Details: <br /> 1234567890
// // 						</ContactDetails>
// // 						<Divider />
// // 						<EmailDetails>
// // 							E-mail ID: <br /> abcd@gmail.com
// // 						</EmailDetails>
// // 						<Divider />
// // 						<FeedbackDetails>
// // 							Feedback: <br /> customerabc@gmail.com
// // 						</FeedbackDetails>
// // 						<Divider />
// // 					</CompanyInfo>
// // 				</Sidebar>
// // 				<MainContent>
// // 					<Header>
// // 						<HeaderContent>
// // 							<HeaderTitle>•VITALATMED•</HeaderTitle>
// // 							<HeaderIcons>
// // 								<HeaderIcon
// // 									loading="lazy"
// // 									src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea57f163c79d24c418f2a57f0fe1b7d7a4b9b43b84ca7ff114166382071981d7?apiKey=9327c602173a48d9b833464b95d13b13&"
// // 									alt="Header Icon 1"
// // 								/>
// // 								<HeaderIcon
// // 									loading="lazy"
// // 									src="https://cdn.builder.io/api/v1/image/assets/TEMP/30867a6645cba26f959d6d271becca18b4586999975227817e3044bc80042e03?apiKey=9327c602173a48d9b833464b95d13b13&"
// // 									alt="Header Icon 2"
// // 								/>
// // 							</HeaderIcons>
// // 						</HeaderContent>
// // 					</Header>
// // 					<WishlistSection>
// // 						<WishlistTitle>WISHLIST</WishlistTitle>
// // 						<WishlistContent>
// // 							<ProductImages>
// // 							</ProductImages>
// // 							<ProductDetails>
// // 								{wishlist.map(item => (
// // 									<div key={item.medID}>
// // 										<h2>{item.medName}</h2>
// // 									</div>
// // 								))}
// // 							</ProductDetails>
// // 						</WishlistContent>
// // 						{deleteMessage && <DeleteMessage>{deleteMessage}</DeleteMessage>}
// // 					</WishlistSection>
// // 				</MainContent>
// // 			</PageContent>
// // 		</PageWrapper>
// // 	);
// // }

// // const PageWrapper = styled.div`
// //   background-color: #fff;
// //   padding-right: 8px;
// // `;

// // const PageContent = styled.div`
// //   display: flex;
// //   gap: 20px;

// //   @media (max-width: 991px) {
// //     flex-direction: column;
// //     gap: 0;
// //   }
// // `;

// // const Sidebar = styled.aside`
// //   width: 18%;
// //   margin-left: 0;

// //   @media (max-width: 991px) {
// //     width: 100%;
// //   }
// // `;

// // const CompanyInfo = styled.div`
// //   background-color: #182744;
// //   color: #42a5bb;
// //   font-size: 20px;
// //   font-weight: 400;
// //   height: 100%;
// //   padding: 17px 20px 280px;

// //   @media (max-width: 991px) {
// //     margin-top: 8px;
// //   }
// // `;

// // const CompanyDetails = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   padding: 0 24px;

// //   @media (max-width: 991px) {
// //     padding: 0 20px;
// //   }
// // `;

// // const CompanyLogo = styled.img`
// //   width: 200px;
// //   aspect-ratio: 1.16;
// //   object-fit: auto;
// //   object-position: center;
// //   box-shadow: 0px 0px 0px 0 #000;
// //   margin-left: 1px;

// //   @media (max-width: 991px) {
// //     margin-left: 10px;
// //   }
// // `;

// // const CompanyAddress = styled.address`
// //   font-family: Jost, sans-serif;
// //   margin-top: 16px;
// //   font-style: normal;
// //   margin-left: -10px;
// // `;

// // const Divider = styled.hr`
// //   border: 1px solid #9bd4cb;
// //   background-color: #9bd4cb;
// //   margin-top: 21px;
// //   height: 1px;
// //   text-align: left; /* Align to the left */
// // `;

// // const ContactDetails = styled.div`
// //   font-family: Jost, sans-serif;
// //   margin-top: 28px;
// // `;

// // const EmailDetails = styled.div`
// //   font-family: Jost, sans-serif;
// //   margin-top: 31px;
// // `;

// // const FeedbackDetails = styled.div`
// //   font-family: Jost, sans-serif;
// //   margin-top: 19px;
// // `;

// // const MainContent = styled.main`
// //   width: 82%;
// //   margin-left: 20px;

// //   @media (max-width: 991px) {
// //     width: 100%;
// //   }
// // `;

// // const Header = styled.header`
// //   margin-top: 4px;

// //   @media (max-width: 991px) {
// //     margin-top: 12px;
// //   }
// // `;

// // const HeaderContent = styled.div`
// //   background-color: rgba(155, 212, 203, 0.5);
// //   display: flex;
// //   width: 98%;
// //   align-items: flex-start;
// //   margin-left: -35px;
// //   gap: 20px;
// //   padding: 0 28px;

// //   @media (max-width: 991px) {
// //     flex-wrap: wrap;
// //     padding: 0 20px;
// //   }
// // `;

// // const HeaderTitle = styled.h1`
// //   color: #182744;
// //   margin: auto 0;
// //   font: 700 30px jsMath-cmbx10, sans-serif;
// // `;

// // const HeaderIcons = styled.div`
// //   display: flex;
// //   align-items: start;
// //   gap: 20px;
// //   justify-content: space-between;
// //   margin-top: -4px;
// //   margin-left: auto; /* Align icons to the rightmost corner */
// // `;

// // const HeaderIcon = styled.img`
// //   width: 70px;
// //   aspect-ratio: 0.96;
// //   object-fit: auto;
// //   object-position: center;

// //   &:last-child {
// //     aspect-ratio: 0.93;
// //   }
// // `;

// // const WishlistSection = styled.section`
// //   margin: 71px 0 0 42px;

// //   @media (max-width: 991px) {
// //     margin-top: 40px;
// //   }
// // `;

// // const WishlistTitle = styled.h2`
// //   color: #000;
// //   font: 700 35px jsMath-cmbx10, sans-serif;
// //   margin-left: 0px;

// //   @media (max-width: 991px) {
// //     max-width: 100%;
// //   }
// // `;

// // const WishlistContent = styled.div`
// //   display: flex;
// //   gap: 20px;
// //   margin-top: 74px;

// //   @media (max-width: 991px) {
// //     flex-direction: column;
// //     gap: 0;
// //     margin-top: 40px;
// //   }
// // `;

// // const ProductImages = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   width: 30%; /* Increased width */
// //   height: 600px; /* Increased height */
// //   margin-left: 1px;

// //   @media (max-width: 991px) {
// //     width: 100%;
// //   }
// // `;

// // const ProductImage = styled.div`
// //   background-color: #d9d9d9;
// //   height: 378px;

// //   &:not(:first-child) {
// //     margin-top: 63px;

// //     @media (max-width: 991px) {
// //       margin-top: 40px;
// //     }
// //   }
// // `;

// // const ProductDetails = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   width: 70%; /* Adjusted width */
// //   margin-left: -160px; /* Adjusted margin-left */
// //   margin-top: 70px;
// //   font-size: 25px;
// //   color: #000;
// //   font-weight: 500;

// //   @media (max-width: 991px) {
// //     width: 100%;
// //     margin-top: 40px;
// //     margin-left: 0; /* Reset margin-left for smaller screens */
// //   }
// // `;

// // const ProductInfo = styled.div`
// //   display: flex;
// //   gap: 7px;
// //   align-items: center; /* Align items vertically */

// //   &:not(:first-child) {
// //     margin-top: 42px;

// //     @media (max-width: 991px) {
// //       margin-top: 40px;
// //     }
// //   }
// // `;

// // const ProductName = styled.span`
// //   font-family: Jost, sans-serif;
// //   margin-left: 180px;
// // `;

// // const ProductPrice = styled.span`
// //   font-family: Jost, sans-serif;
// //   margin-left: 180px;
// // `;

// // const ProductValue = styled.span`
// //   font-family: Jost, sans-serif;
// // `;

// // const ProductIcon = styled.img`
// //   width: 40px;
// //   aspect-ratio: 1;
// //   object-fit: auto;
// //   object-position: center;
// //   margin-top: 29px;
// //   margin-bottom: 120px;
// //   margin-left: 180px; /* Adjusted margin-left */
// //   cursor: pointer;
// // `;

// // const DeleteMessage = styled.div`
// //   position: fixed;
// //   top: 20px;
// //   left: 50%;
// //   transform: translateX(-50%);
// //   background-color: #ff4444;
// //   color: #fff;
// //   padding: 10px 20px;
// //   border-radius: 5px;
// //   font-size: 25px;
// //   z-index: 1000;
// // `;

// // export default WishList;


// import styled from "styled-components";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function WishList() {
//   const [wishlist, setWishlist] = useState([]);
//   const [deleteMessage, setDeleteMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     // Fetch wishlist data from the backend when the component mounts
//     axios
//       .get("http://localhost:3001/wishlist")
//       .then(response => {
//         // Update the wishlist state with the fetched data
//         setWishlist(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching wishlist data:", error);
//         setErrorMessage("Failed to fetch wishlist data");
//       });
//   }, []);

//   const handleDelete = (medID) => {
//     axios
//       .delete(`http://localhost:3001/wishlist/${medID}`)
//       .then(response => {
//         // Update the wishlist state to remove the deleted item
//         setWishlist(prevWishlist => prevWishlist.filter(item => item.medID !== medID));
//         setDeleteMessage("Deleted!");
//         setTimeout(() => {
//           setDeleteMessage("");
//         }, 2000); // Hide the message after 2 seconds
//       })
//       .catch(error => {
//         console.error("Error deleting wishlist item:", error);
//         setErrorMessage("Failed to delete wishlist item");
//       });
//   };

//   return (
//     <PageWrapper>
//       <PageContent>
//         <Sidebar>
//           <CompanyInfo>
//             <CompanyDetails>
//               <CompanyLogo
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/598df7151c6f87d38af8e4418e12634310a0d2d35d44ffcb2c12ec5dd28caa1d?apiKey=9327c602173a48d9b833464b95d13b13&"
//                 alt="Company Logo"
//               />
//               <CompanyAddress>
//                 Company Location: <br /> Chennai <br /> Bengaluru <br /> Mumbai
//               </CompanyAddress>
//             </CompanyDetails>
//             <Divider />
//             <ContactDetails>
//               Contact Details: <br /> 1234567890
//             </ContactDetails>
//             <Divider />
//             <EmailDetails>
//               E-mail ID: <br /> abcd@gmail.com
//             </EmailDetails>
//             <Divider />
//             <FeedbackDetails>
//               Feedback: <br /> customerabc@gmail.com
//             </FeedbackDetails>
//             <Divider />
//           </CompanyInfo>
//         </Sidebar>
//         <MainContent>
//           <Header>
//             <HeaderContent>
//               <HeaderTitle>•VITALATMED•</HeaderTitle>
//               <HeaderIcons>
//                 <HeaderIcon
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea57f163c79d24c418f2a57f0fe1b7d7a4b9b43b84ca7ff114166382071981d7?apiKey=9327c602173a48d9b833464b95d13b13&"
//                   alt="Header Icon 1"
//                 />
//                 <HeaderIcon
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/30867a6645cba26f959d6d271becca18b4586999975227817e3044bc80042e03?apiKey=9327c602173a48d9b833464b95d13b13&"
//                   alt="Header Icon 2"
//                 />
//               </HeaderIcons>
//             </HeaderContent>
//           </Header>
//           <WishlistSection>
//             <WishlistTitle>WISHLIST</WishlistTitle>
//             <WishlistContent>
//               <ProductImages></ProductImages>
//               <ProductDetails>
//                 {wishlist.map(item => (
//                   <div key={item.medID}>
//                     <h2>{item.medName}</h2>
//                     <DeleteButton onClick={() => handleDelete(item.medID)}>Delete</DeleteButton>
//                   </div>
//                 ))}
//               </ProductDetails>
//             </WishlistContent>
//             {deleteMessage && <DeleteMessage>{deleteMessage}</DeleteMessage>}
//             {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
//           </WishlistSection>
//         </MainContent>
//       </PageContent>
//     </PageWrapper>
//   );
// }

// const PageWrapper = styled.div`
//   background-color: #fff;
//   padding-right: 8px;
// `;

// const PageContent = styled.div`
//   display: flex;
//   gap: 20px;

//   @media (max-width: 991px) {
//     flex-direction: column;
//     gap: 0;
//   }
// `;

// const Sidebar = styled.aside`
//   width: 18%;
//   margin-left: 0;

//   @media (max-width: 991px) {
//     width: 100%;
//   }
// `;

// const CompanyInfo = styled.div`
//   background-color: #182744;
//   color: #42a5bb;
//   font-size: 20px;
//   font-weight: 400;
//   height: 100%;
//   padding: 17px 20px 280px;

//   @media (max-width: 991px) {
//     margin-top: 8px;
//   }
// `;

// const CompanyDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0 24px;

//   @media (max-width: 991px) {
//     padding: 0 20px;
//   }
// `;

// const CompanyLogo = styled.img`
//   width: 200px;
//   aspect-ratio: 1.16;
//   object-fit: auto;
//   object-position: center;
//   box-shadow: 0px 0px 0px 0 #000;
//   margin-left: 1px;

//   @media (max-width: 991px) {
//     margin-left: 10px;
//   }
// `;

// const CompanyAddress = styled.address`
//   font-family: Jost, sans-serif;
//   margin-top: 16px;
//   font-style: normal;
//   margin-left: -10px;
// `;

// const Divider = styled.hr`
//   border: 1px solid #9bd4cb;
//   background-color: #9bd4cb;
//   margin-top: 21px;
//   height: 1px;
//   text-align: left; /* Align to the left */
// `;

// const ContactDetails = styled.div`
//   font-family: Jost, sans-serif;
//   margin-top: 28px;
// `;

// const EmailDetails = styled.div`
//   font-family: Jost, sans-serif;
//   margin-top: 31px;
// `;

// const FeedbackDetails = styled.div`
//   font-family: Jost, sans-serif;
//   margin-top: 19px;
// `;

// const MainContent = styled.main`
//   width: 82%;
//   margin-left: 20px;

//   @media (max-width: 991px) {
//     width: 100%;
//   }
// `;

// const Header = styled.header`
//   margin-top: 4px;

//   @media (max-width: 991px) {
//     margin-top: 12px;
//   }
// `;

// const HeaderContent = styled.div`
//   background-color: rgba(155, 212, 203, 0.5);
//   display: flex;
//   width: 98%;
//   align-items: flex-start;
//   margin-left: -35px;
//   gap: 20px;
//   padding: 0 28px;

//   @media (max-width: 991px) {
//     flex-wrap: wrap;
//     padding: 0 20px;
//   }
// `;

// const HeaderTitle = styled.h1`
//   color: #182744;
//   margin: auto 0;
//   font: 700 30px jsMath-cmbx10, sans-serif;
// `;

// const HeaderIcons = styled.div`
//   display: flex;
//   align-items: start;
//   gap: 20px;
//   justify-content: space-between;
//   margin-top: -4px;
//   margin-left: auto; /* Align icons to the rightmost corner */
// `;

// const HeaderIcon = styled.img`
//   width: 70px;
//   aspect-ratio: 0.96;
//   object-fit: auto;
//   object-position: center;

//   &:last-child {
//     aspect-ratio: 0.93;
//   }
// `;

// const WishlistSection = styled.section`
//   margin: 71px 0 0 42px;

//   @media (max-width: 991px) {
//     margin-top: 40px;
//   }
// `;

// const WishlistTitle = styled.h2`
//   color: #000;
//   font: 700 35px jsMath-cmbx10, sans-serif;
//   margin-left: 0px;

//   @media (max-width: 991px) {
//     max-width: 100%;
//   }
// `;

// const WishlistContent = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-top: 74px;

//   @media (max-width: 991px) {
//     flex-direction: column;
//     gap: 0;
//     margin-top: 40px;
//   }
// `;

// const ProductImages = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 30%; /* Increased width */
//   height: 600px; /* Increased height */
//   margin-left: 1px;

//   @media (max-width: 991px) {
//     width: 100%;
//   }
// `;

// const ProductImage = styled.div`
//   background-color: #d9d9d9;
//   height: 378px;

//   &:not(:first-child) {
//     margin-top: 63px;

//     @media (max-width: 991px) {
//       margin-top: 40px;
//     }
//   }
// `;

// const ProductDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 70%; /* Adjusted width */
//   margin-left: -160px; /* Adjusted margin-left */
//   margin-top: 70px;
//   font-size: 25px;
//   color: #000;
//   font-weight: 500;

//   @media (max-width: 991px) {
//     width: 100%;
//     margin-top: 40px;
//     margin-left: 0; /* Reset margin-left for smaller screens */
//   }
// `;

// const DeleteButton = styled.button`
//   background-color: #ff4444;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   margin-top: 10px;
// `;

// const DeleteMessage = styled.div`
//   position: fixed;
//   top: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #ff4444;
//   color: #fff;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 25px;
//   z-index: 1000;
// `;

// const ErrorMessage = styled.div`
//   position: fixed;
//   top: 50px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #ff4444;
//   color: #fff;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 25px;
//   z-index: 1000;
// `;

// export default WishList;
 

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";

function WishList() {
  const [wishlist, setWishlist] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch wishlist data from the backend when the component mounts
    axios
      .get("http://localhost:3001/wishlist")
      .then(response => {
        // Update the wishlist state with the fetched data
        setWishlist(response.data);
      })
      .catch(error => {
        console.error("Error fetching wishlist data:", error);
        setErrorMessage("Failed to fetch wishlist data");
      });
  }, []);

  const handleDelete = (medID) => {
    axios
      .delete(`http://localhost:3001/wishlist/${medID}`)
      .then(response => {
        // Update the wishlist state to remove the deleted item
        setWishlist(prevWishlist => prevWishlist.filter(item => item.medID !== medID));
        setDeleteMessage("Deleted!");
        setTimeout(() => {
          setDeleteMessage("");
        }, 2000); // Hide the message after 2 seconds
      })
      .catch(error => {
        console.error("Error deleting wishlist item:", error);
        setErrorMessage("Failed to delete wishlist item");
      });
  };

  return (
    <PageWrapper>
      <PageContent>
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
              E-mail ID: <br /> abcd@gmail.com
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
                <HeaderIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea57f163c79d24c418f2a57f0fe1b7d7a4b9b43b84ca7ff114166382071981d7?apiKey=9327c602173a48d9b833464b95d13b13&"
                  alt="Header Icon 1"
                />
                <HeaderIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30867a6645cba26f959d6d271becca18b4586999975227817e3044bc80042e03?apiKey=9327c602173a48d9b833464b95d13b13&"
                  alt="Header Icon 2"
                />
              </HeaderIcons>
            </HeaderContent>
          </Header>
          <WishlistSection>
            <WishlistTitle>WISHLIST</WishlistTitle>
            <WishlistContent>
              {wishlist.map(item => (
                <ProductCard key={item.medID}>
                  <ProductImage src={item.medImage} alt={item.medName} />
                  <ProductDetails>
                    <h2>{item.medName}</h2>
                    <p>Price: {item.price}</p>
                    <DeleteButton onClick={() => handleDelete(item.medID)}>Delete</DeleteButton>
                  </ProductDetails>
                </ProductCard>
              ))}
            </WishlistContent>
            {deleteMessage && <DeleteMessage>{deleteMessage}</DeleteMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </WishlistSection>
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
  text-align: left; /* Align to the left */
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

  &:last-child {
    aspect-ratio: 0.93;
  }
`;

const WishlistSection = styled.section`
  margin-top: 20px;
`;

const WishlistTitle = styled.h2`
  font-family: Jost, sans-serif;
  font-size: 28px;
  font-weight: 400;
  color: #333;
  margin-bottom: 20px;
`;

const WishlistContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #c9302c;
  }
`;

const DeleteMessage = styled.p`
  color: green;
  font-size: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;

export default WishList;
