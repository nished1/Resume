import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding:18px;

   
`

const DishImage = styled.div`
.dish-image{
    width: 50px;
    height: 50px%;
   
}
`
const PriceContent = styled.div`
    font-family: "Montez", sans-serif;
   
    

    .dish-actual-price{
        text-decoration: line-through;
        border-top: 1px solid #b48c80;
        height:12px;
       padding-bottom:1px;
        color:red;
    }

    .dish-offer-price{
        border-bottom: 1px solid #b48c80;
       
        color: #423632;
    }
`
const DishContent = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;

  .dish-name {
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding-bottom: 0.3rem;
  }
  .dish-items {
    margin: 0;
    font-weight: bolder;
    font-size: 11px;
    color: #000000;
    @media (max-width: 300px){
        display: none;
    }
  }
`;

const OfferMenu = (props) => {
    
    return (
        <MenuContainer>
          
            <DishImage>
            <img 
      src={props.image}
      alt="new"
      className="dish-image"
      />
                </DishImage>

            <DishContent>
                <p className="dish-name">{props.dishname.substring(2)}</p>
                <p className="dish-items">{props.description}</p>
            </DishContent>
            <PriceContent>
                <p className="dish-actual-price">{props.actualprice}</p>
                <p className="dish-offer-price">{props.offerprice}</p>
            </PriceContent>
        </MenuContainer>
    )
}

export default OfferMenu;