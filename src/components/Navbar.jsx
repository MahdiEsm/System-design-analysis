import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    background-color:rgba(63, 63, 63, 0.182);
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ fontSize: "10px" })}
`

const SearchContainer = styled.div`
   // border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "2px" })}
`
const Input = styled.input`
    text-align: right;
    ${mobile({ width: "50px" })}
    //border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2.3, justifyContent: "center" })}
`
const MenuItem = styled.div`
    color:  black;
    font-size: 14px;

    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = ()=> {
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity) 
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>فارسی</Language>
                <SearchContainer>
                    <Input placeholder="جستجو"/> 
                    <SearchIcon style={{color:"gray", fontSiz:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                digital market
                </Logo>
            </Center>
            <Right>
                <Link style={{textDecoration: 'none'}}   to="/register">
                    <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/login">
                    <MenuItem>SING IN</MenuItem>
                </Link>
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartCheckoutIcon/>
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
