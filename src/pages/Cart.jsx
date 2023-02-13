import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const KEY = "pk_test_51Mb4piD9kEyjjKdLLibVG5TR8UbJS5jCowYKLSQFdfQdeA0y8EmoXNPgk3CywMvAiI3L3sWRWBSLHE0TLzYezjhN006nymn2zy"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-size: 17px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 17px;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  font-size: 17px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);


  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log(stripeToken)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>سبد شما</Title>
        <Top>
          <Link to="/">
            <TopButton>ادامه خرید</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) =>
              <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product :</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>تومان {product.price*product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            )}
            <Hr />

          </Info>
          <Summary>
            <SummaryTitle>خلاصه سفارش</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>جمع فرعی</SummaryItemText>
              <SummaryItemPrice>{cart.total} تومان</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>حمل و نقل برآورد شده</SummaryItemText>
              <SummaryItemPrice>50000 تومان</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>تخفیف</SummaryItemText>
              <SummaryItemPrice>-50000 تومان</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>جمع کل</SummaryItemText>
              <SummaryItemPrice>{cart.total} تومان</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Digital Market"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINi-9vvoYN2c-W45s8bB_7Fz1ZDApTp4-jw&usqp=CAU"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>اکنون تسویه حساب کنید</Button> 
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;