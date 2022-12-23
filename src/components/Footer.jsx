import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styled from "styled-components";
import { mobile } from "../responsive";
  
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
    background-color: #f0e9bf;
`;
  
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
  
const Logo = styled.h1``;
  
const Desc = styled.p`
    margin: 20px 0px;
`;
  
const SocialContainer = styled.div`
    display: flex;
`;
  
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
  
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;
  
const Title = styled.h3`
    margin-bottom: 30px;
`;
  
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
  
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
  
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
`;
  
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
  
const Payment = styled.img`
      width: 50%;
`;
  
const Footer = () => {
    return (
      <Container>
        <Left>
          <Title>تماس</Title>
          <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/> آدرس :
          </ContactItem>
          <ContactItem>
            <LocalPhoneIcon style={{marginRight:"10px"}}/> شماره تماس :
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> ایمیل :
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Left>
        <Center>
          <Title>لینک های مفید</Title>
          <List>
            <ListItem>Home</ListItem>
          </List>
        </Center>
        <Right>
        <Logo>LAMA.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </Container>
    );
};
  
export default Footer;