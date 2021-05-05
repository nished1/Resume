import styled from "styled-components"
import React from 'react'
import { Icon } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Instagram } from "@material-ui/icons";

const FooterWrapper = styled.div`
background-color:#008000;
color:#fff;
text-align:center;
justify-content:center;
padding:15px;
height:10vh;
widthe:100%;

;`
const Footer = () => {
    return (
<div>
    <FooterWrapper>
      Keep in touch <br/>
      <a  href="https://www.facebook.com/Nishedghimire1/"
                target="_blank"><FacebookIcon/> </a>
      <a href = "https://www.instagram.com/nished_ghimire/"  target="_blank"><Instagram /> </a>
    </FooterWrapper>
</div>
    )



}
export default Footer