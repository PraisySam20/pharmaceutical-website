import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        // Navigate to another page or handle login success
        navigate('/explore');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <PageWrapper>
      <LoginSection>
        <BackgroundImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/3025b66d43cd9da69044653b7ea012564abc386b30ea1e4bd93907740328d0c1?apiKey=9327c602173a48d9b833464b95d13b13&" alt="Background" />
        <LoginForm onSubmit={handleLogin}>
          <LoginTitle>Login</LoginTitle>
          <InputField
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <LoginButton type="submit">Login</LoginButton>
          <SignUpWrapper>
            <SignUpText>Don't have an account yet?</SignUpText>
            <SignUpLink href="#" onClick={handleSignUpClick}>Sign-up</SignUpLink>
          </SignUpWrapper>
        </LoginForm>
      </LoginSection>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color:#182744;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content: center;
`;

const LoginSection = styled.section`
  background-color: #182744;
  display: flex;
  width: calc(100% - 200px);
  flex-direction: column;
  justify-content: center;
  padding: 40px 30px;
  position: relative;
  min-height: 884px;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const LoginForm = styled.form`
  position: relative;
  display: flex;
  width: 438px;
  max-width: 100%;
  flex-direction: column;
  margin: 156px 0 110px;

  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

const LoginTitle = styled.h1`
  color: #000;
  font: 800 30px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const InputField = styled.input`
  font-family: Jost, sans-serif;
  border-radius: 10px;
  box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  margin-top: 49px;
  color: #000;
  font-weight: 300;
  padding: 17px 16px;

  &::placeholder {
    color: #000;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 20px;
`;

const LoginButton = styled.button`
  border-radius: 13px;
  box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(24, 39, 68, 0.75);
  margin-top: 49px;
  color: #fff;
  justify-content: center;
  padding: 13px 60px;
  font: 800 25px Inter, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 6px 0 0;
    padding: 0 20px;
  }
`;

const SignUpWrapper = styled.div`
  display: flex;
  margin-top: 34px;
  gap: 12px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const SignUpText = styled.p`
  color: #000;
  font-family: Jost, sans-serif;
  font-weight: 300;
  flex-grow: 1;
  margin-right: -128px;
`;

const SignUpLink = styled.a`
  color: #42a5bb;
  font-family: Jost, sans-serif;
  font-weight: 500;
  text-decoration: underline;
  flex-grow: 1;
  margin-top: 20px;
  flex-basis: auto;
`;

export default LoginPage;
