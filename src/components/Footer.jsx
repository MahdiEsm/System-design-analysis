import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
  
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
    /* margin-top: 30px;
    margin-bottom: 30px; */
    margin: 30px 0px 30px 0px;
`;
  
const SocialContainer = styled.div`
    display: flex;
    margin-left: 60px;
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
    //flex: 1;
    padding: 20px;
    //flex-direction: column;
    margin: 0px 200px;
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
  
const Footer = () => {
    return (
      <Container>
        <Left>
          <Title>تماس</Title>
          <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/> آدرس :  زنجان - دانشگاه زنجان   
          </ContactItem>
          <ContactItem>
            <LocalPhoneIcon style={{marginRight:"10px"}}/> شماره تماس : 02444444444
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} />mahdiesm8013@gmail.com : ایمیل 
          </ContactItem>
        </Left>
        <Center>
          <Title>لینک های مفید</Title>
          <List>
            <Link style={{textDecoration: 'none', color: "black", marginRight: '40px'}} to="/">
              <ListItem>Home</ListItem>
            </Link>
          </List>
        </Center>
        <Right>
        <Logo style={{textAlign: 'center'}}>Digital market</Logo>
          <Desc style={{textAlign: 'right'}}>
این سایت برای فروش محصولات دیجیتالی مورد استفاده برای عموم مردم با بالاترین کیفیت و بهترین قیمت است 
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