import styled from "styled-components";
import { mobile } from "../responsive";

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  return (
    <Container>
      <Wrapper>
        <Title>ایجاد حساب کاربری</Title>
        <Form>
          <Input placeholder="نام خانوادگی" />
          <Input placeholder="نام" />
          <Input placeholder="ایمیل" />
          <Input placeholder="نام کاربری" />
          <Input placeholder="تکرار رمزعبور" />
          <Input placeholder="رمزعبور" />
          <Agreement>
            با ایجاد یک حساب کاربری، من با پردازش اطلاعات شخصی خود مطابق با سیاست حفظ حریم خصوصی موافقت می کنم.
          </Agreement>
          <Button>ایجاد کردن</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;