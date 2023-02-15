import styled from "styled-components";
import { login } from "../redux/apiCalls";
import {mobile} from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    ),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpqJkt4UJGxna4L6QNvwGZKvbFBbUSirrCxfrOq2wAco1wT30oRXAXd6bjJRAgZu7oQk&usqp=CAU")
      center;
  background-size: cover;

`;

const Wrapper = styled.div`
  width: 25%;
  margin: 120px 10px 50px 480px;
  padding: 20px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.511),
      rgba(255, 255, 255, 0.29)
    );
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;   
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  text-align: right;  
`;

const Button = styled.button`
  font-size: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Linked = styled.a`
  margin: 5px 0px;
  font-size: 18px;
  text-align: right; 
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>ورود</Title>
        <Form>
          <Input 
            placeholder="نام کاربری" 
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            placeholder="رمز عبور" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            وارد شدن
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link style={{textAlign: 'right', color: "black"}}  to="/register">
            <Linked >ایجاد یک حساب کاربری جدید</Linked>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;