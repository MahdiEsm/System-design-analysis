import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.041),
      rgba(255, 255, 255, 0)
    ),
    url("https://www.pngitem.com/pimgs/m/513-5131515_website-background-design-illustration-hd-png-download.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
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
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 18px;
  text-align: right; 
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ورود</Title>
        <Form>
          <Input placeholder="نام کاربری" />
          <Input placeholder="رمز عبور" />
          <Button>وارد شدن</Button>
          <Link>فراموشی رمزعبور</Link>
          <Link>ایجاد یک حساب کاربری جدید</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;