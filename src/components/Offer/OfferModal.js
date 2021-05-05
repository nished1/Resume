import React from "react";
import styled from "styled-components";
import OfferHeader from "./OfferHeader";
import OfferBody from "./OfferBody";
const OfferContainer = styled.div`
`


const OfferModal = ({ offerdetail,handlefix }) =>{
  
    return(
        <OfferContainer>
            <OfferHeader offerdetail={offerdetail} handlefix={handlefix} />
            <OfferBody  offerdetail={offerdetail} />
        </OfferContainer>
    )
}
export default OfferModal;