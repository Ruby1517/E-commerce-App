import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile, tablet } from "../responsive";
import { useSelector } from 'react-redux'


const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})};
   
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content: space-around;
    ${mobile({padding:"10px"})};
    ${tablet({padding: "10px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
   font-size: 14px;
   cursor: pointer; 
   ${mobile({display:"none"})};
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})};

`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
   font-weight: bold; 
   ${mobile({fontSize:"24px"})};

`;

const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   ${mobile({flex: 2, justifyContent: "center"})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})};
`;


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>RodElla.</Logo></Center>
            <Right>
                <Link to="/register">
                    <MenuItem>
                     REGISTER
                    </MenuItem>
                </Link>
                <Link to="/login">
                <MenuItem>
                    SIGN IN
                </MenuItem>     
                </Link>
                
                <Link to="/cart">
                    <MenuItem>
                        <Badge overlap="rectangular" badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar