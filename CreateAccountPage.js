import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/7860a60d8960edbd993616523f40d03612b749c09f304fd020fcdd60c4496511?apiKey=9327c602173a48d9b833464b95d13b13&";

const inputFields = [
  {
    label: "Full Name",
    placeholder: "Full Name",
    name: "fullName",
  },
  {
    label: "E-Mail",
    placeholder: "E-Mail",
    name: "email",
  },
  {
    label: "Phone Number",
    placeholder: "Phone Number",
    name: "phoneNumber",
  },
  {
    label: "Gender",
    placeholder: "Gender",
    name: "gender",
    options: ["Male", "Female", "Other"],
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
  },
];

function CreateAccountPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await fetch('http://localhost:3001/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create account');
      }

      navigate("/explore");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <FormWrapper>
          <BackgroundImage src={backgroundImage} alt="" />
          <FormContent>
            <FormHeader>Create Account</FormHeader>
            <FormSubheader>Get started!</FormSubheader>
            <form onSubmit={handleSubmitClick}>
              {inputFields.map((field, index) => (
                <InputField key={index}>
                  {field.label === "Gender" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      aria-label={field.label}
                    >
                      <option value="">Select Gender</option>
                      {field.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      aria-label={field.label}
                    />
                  )}
                </InputField>
              ))}
              {error && <ErrorText>{error}</ErrorText>}
              <SubmitButton type="submit">Create Account</SubmitButton>
            </form>
            <LoginPrompt>
              <span>Already have an account?</span>
              <LoginLink href="#" onClick={handleLoginClick}>Login</LoginLink>
            </LoginPrompt>
          </FormContent>
        </FormWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const ContentWrapper = styled.div`
  background-color: #182744;
  display: flex;
  justify-content: center;
  padding: 70px 60px;
  width: 100%;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const FormWrapper = styled.div`
  background-color: #fff;
  border-radius: 93px;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  position: relative;
  overflow: hidden;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FormContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
  width: 434px;
  max-width: 100%;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const FormHeader = styled.h1`
  color: #000;
  font: 800 30px Inter, sans-serif;
  margin-bottom: 0px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormSubheader = styled.p`
  color: #000;
  font: 300 25px Jost, sans-serif;
  margin-top: 10px;
  margin-bottom: -10px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const InputField = styled.div`
  font-family: Jost, sans-serif;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, 0.25);
  color: #000;
  font-weight: 300;
  margin-top: 40px;
  padding: 8px 10px;
  width: 100%;
  input {
    width: 100%;
    padding: 0px;
    border: none;
    border-radius: 5px;
    margin-top: 0px;
    outline: none;
    font-size: 16px;
  }
  select {
    font-family: Jost, sans-serif;
    width: 100%;
    padding: 2.5px 0px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    background-color: #fff;
    color: #000;
  }
`;

const SubmitButton = styled.button`
  background-color: rgba(24, 39, 68, .75);
  border-radius: 13px;
  box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, 0.25);
  color: #fff;
  font: 800 25px Inter, sans-serif;
  margin-top: 40px;
  cursor: pointer;
  padding: 10px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const LoginPrompt = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

const LoginLink = styled.a`
  color: #42a5bb;
  font-family: Jost, sans-serif;
  font-weight: 500;
  text-decoration: underline;
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
`;

export default CreateAccountPage;
