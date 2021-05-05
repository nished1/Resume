import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
const HeaderContainer = styled.div`
    background-color:#202535;
    color: #d4e021;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 600;
    padding: 1em;
    .restuarant-name{
        font-family: "Suranna", sans-serif;
        text-transform: uppercase;
    }

    .special-offer{
        font-family: "Montez", sans-serif;
        font-size: 1.5em;
        margin-top: 0.8em;
        text-transform: uppercase;
    }
`

const CloseIcon = styled.div`
  float:right;
  top: 3%;
  right: 3%;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;
const OfferHeader = ({ offerdetail,handlefix }) =>{
    
    return(
        <HeaderContainer>
              <CloseIcon>
                  <AiOutlineClose onClick={() => handlefix()} />
                </CloseIcon>
            <h3 className="restuarant-name">{offerdetail.name}</h3>
            <h5 className="special-offer">{offerdetail.description_en}</h5>
        </HeaderContainer>
    )
}
export default OfferHeader;