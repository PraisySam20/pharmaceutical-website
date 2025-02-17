import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./LoginPage"; // Ensure this path is correct
import CreateAccountPage from "./CreateAccountPage"; // Ensure this path is correct
import MyComponent from "./MyComponent"; // Ensure this path is correct
import MyComponent2 from "./MyComponent2";
import WishList from "./WishList"
import UserProfile from "./UserProfile";

const socialMediaData = [
  {
    platform: "@vitalamted_groups",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a08e3e5a47dddf89154b9ddcf5242369de8250eb2aa1079201a68900c19ba7e2?apiKey=9327c602173a48d9b833464b95d13b13&",
  },
];

function HomeScreen() {
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
            <HeroImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f028fc05e4e05c095dc45529f5d4d2dc49bbc858fd8a7818f6ad00edbe80b94?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Hero Image" />
            <HeaderContent>
              <LoginSignupButtons>
                <Link to="/login"><LoginButton>LOGIN</LoginButton></Link>
                <Link to="/signup"><SignupButton>SIGNUP</SignupButton></Link>
              </LoginSignupButtons>
              <CompanySlogan>•VITALATMED•</CompanySlogan>
              <CompanyTagline>
                Trusted by Families, Recommended by Professionals
              </CompanyTagline>
            </HeaderContent>
          </Header>
          <WelcomeSection>
            <Heading>
              Welcome to [PharmaCo], a Pioneering Force in <br />Global Healthcare
            </Heading>
            <Description>
              At Vitalamted, we are dedicated to improving the lives of patients
              worldwide. As a leading pharmaceutical company, our commitment to
              health extends beyond the medicines we create.{" "}
              <br /> Our Mission To enrich lives and foster healthier
              communities through the development and distribution of
              world-class medications and therapies. We strive to be at the
              forefront of scientific research, harnessing the power of
              technology to transform the future of medicine.
              <br /> Our Values <br /> 
              <ul>
                <li>Integrity: Upholding the highest ethical standards in all our endeavors.</li> 
                <li>Quality: Ensuring excellence in every product we deliver.</li>
                <li>Innovation: Pioneering breakthroughs by encouraging out-of-the-box thinking.{" "}</li>
                <li>Passion: Infusing energy and dedication into every challenge we undertake.</li>
              </ul>
              <br /> Join Our Journey Discover more
              about our innovative therapies, read inspiring patient stories,
              and explore career opportunities with us. Together, we can shape a
              healthier future for all.
            </Description>
            <Link to="/explore"><ExploreButton>EXPLORE</ExploreButton></Link>
          </WelcomeSection>
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
  width: 85%;
  margin-left: -10px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Header = styled.header`
  background-color: rgba(155, 212, 203, 0.5);
  padding-right: 31px;
  margin-top: 8px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 16px;
  }
`;

const HeroImage = styled.img`
  width: 70%;
  aspect-ratio: 2.02;
  object-fit: auto;
  margin-left: 0px;

  @media (max-width: 991px) {
    max-width: 60%;
  }
`;



const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #182744;
  font-size: 30px;
  font-weight: 500;
  margin-top: 43px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LoginSignupButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  font-size: 40px;
  white-space: nowrap;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px; /* Adjust as needed */
  margin-right: 20px; /* Adjust as needed */

  @media (max-width: 991px) {
    white-space: initial;
    position: static;
    justify-content: flex-start; /* Align buttons to the left on smaller screens */
  }
  
`;

const LoginButton = styled.button`
  font-family: Jost, sans-serif;
  border-radius: 37.5px;
  border: 1px solid #182744;
  background-color: #9bd4cb;
  font-size: 20px;
  padding: 18px 35px;
  cursor: pointer;
  

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
  &:hover {
    background-color: #b4e2da;
  }
`;

const SignupButton = styled.button`
  font-family: Jost, sans-serif;
  border-radius: 37.5px;
  background-color: #fbfffe;
  font-size: 20px;
  padding: 18px 35px;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
  &:hover {
    background-color: #F1F1F1;
  }
`;

const CompanySlogan = styled.h1`
  font-family: jsMath-cmbx10, sans-serif;
  font-weight: 700;
  margin-top: -100px;
  margin-left: 5px;
  text-align: right; /* Align to the left */

  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const CompanyTagline = styled.p`
  font-family: Jost, sans-serif;
  font-style: italic;
  margin-top: -35px;
  text-align: right; /* Align to the left */
`;

const WelcomeSection = styled.section`
  width: 960px;
  max-width: 100%;
  color: #000;
  margin: 17px 0 0 40px;
`;

const Heading = styled.h2`
  font: 600 35px Jost, sans-serif;
  text-align: centre;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.p`
  margin-top: 21px;
  font: 400 20px 'Jost', sans-serif;
  text-align: left;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ExploreButton = styled.button`
  border-radius: 37.5px;
  border: 1px solid #182744;
  background-color: #9bd4cb;
  color: #182744;
  white-space: nowrap;
  padding: 21px 60px;
  font: 500 25px Jost, sans-serif;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 24px 0 20px;
  }
  &:hover {
    background-color: #b4e2da;
  }
`;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/explore" element={<MyComponent />}/>
		<Route path="explore/MyComponent2/:medID" element={<MyComponent2 />} />
		<Route path="/wish" element={<WishList/>} />
		<Route path="/profile" element={<UserProfile/>} />
		<Route path="/logout" element={<HomeScreen/>} />
      </Routes>
    </Router>
  );
}
