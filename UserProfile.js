import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <PageWrapper>
      <PageContent>
        <Sidebar>
          <CompanyInfo>
            <CompanyDetails>
              <CompanyLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/598df7151c6f87d38af8e4418e12634310a0d2d35d44ffcb2c12ec5dd28caa1d?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Company Logo" />
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
                  <HeaderIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea57f163c79d24c418f2a57f0fe1b7d7a4b9b43b84ca7ff114166382071981d7?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Header Icon 1" />
                </Link>
                <Link to="/profile">
                  <HeaderIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/30867a6645cba26f959d6d271becca18b4586999975227817e3044bc80042e03?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Header Icon 2" />
                </Link>
              </HeaderIcons>
            </HeaderContent>
          </Header>
          <ProfileSection>
            <SectionTitle>Profile</SectionTitle>
            <ProfileDetails>
              <ImageColumn>
                <ProfilePic loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/66739d90c3dc90b4f2a0faab501859f1bd5109cb38ffc68f288761d5a2fbcad6?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Profile Picture" />
              </ImageColumn>
              <DataColumn>
                <DataItem><span>Name:</span> <Value>XXXX</Value></DataItem>
                <DataItem><span>Email:</span> <Value>abcd@gmail.com</Value></DataItem>
                <DataItem><span>Phone Number:</span> <Value>1234567890</Value></DataItem>
                <DataItem><span>Gender:</span> <Value>Male</Value></DataItem>
              </DataColumn>
            </ProfileDetails>
			<Link to="/logout">
            <LogoutButton>Logout</LogoutButton>
			</Link>
          </ProfileSection>
        </MainContent>
      </PageContent>
    </PageWrapper>
  );
}

export default UserProfile;

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
  font: 700 35px jsMath-cmbx10, sans-serif;
  margin-left: 0px;
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

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 71px 0 0 42px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 35px;
`;

const ProfileDetails = styled.div`
  display: flex;
  margin-top: 84px;
  gap: 20px;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ImageColumn = styled.div`
  width: 45%;
  @media (min-width: 992px) {
    width: auto;
  }
`;

const ProfilePic = styled.img`
  aspect-ratio: 1;
  width: 75%;
  margin-top: -100px; 
  border: 1px solid #000;
`;

const DataColumn = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  margin-top: -50px;
  margin-left: -50px;
  gap: 10px;
  @media (min-width: 992px) {
    width: auto;
  }
`;

const DataItem = styled.div`
  font-family: Jost, sans-serif;
  font-size: 25px;
  font-weight: 500;
`;

const Value = styled.span`
  margin-left: 10px;
`;

const LogoutButton = styled.button`
  margin-top: -900px;
  margin-left: 530px;
  padding: 10px 20px;
  background-color: #182744;
  color: #fff;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  align-self: flex-start;

  &:hover {
    background-color: #2b3b55;
  
  }
`;
