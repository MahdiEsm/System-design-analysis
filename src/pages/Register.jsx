import { register } from "../redux/apiCalls";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";


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
  width: 40%;
  margin: 120px 10px 50px 350px;
  padding: 30px;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  text-align: right;  
`;

const Agreement = styled.span`
  font-size: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;

`;

const Button = styled.button`
  font-size: 15px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    register({firstname, username, email, password});
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>ایجاد حساب کاربری</Title>
        <Form> 
          <Input 
            placeholder="نام کاربری" 
            onChange={(e) => setUsername(e.target.value)}
          />         
          <Input 
            placeholder="نام" 
            onChange={(e) => setFirstname(e.target.value)}  
          />          
          <Input 
            placeholder="رمزعبور" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input 
            placeholder="ایمیل" 
            onChange={(e) => setEmail(e.target.value)}  
          />

          <Agreement style={{textAlign: 'right'}}>
            با ایجاد یک حساب کاربری، من با پردازش اطلاعات شخصی خود مطابق با سیاست حفظ حریم خصوصی موافقت می کنم
          </Agreement>
          <Button onClick={handleClick}>ایجاد کردن</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;