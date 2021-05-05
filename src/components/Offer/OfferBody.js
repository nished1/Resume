import React ,{ useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import OfferMenu from "./OfferMenu";
import axios from "axios";
require('dotenv').config()
const BodyContainer = styled.div`
    margin: '1rem';
    `;

const OfferBody =  ({ offerdetail }) =>{
    const [offer, setOffer] = useState(null);
    
    const url ="http://"+window.location.hostname+"/api/offer/"+offerdetail.id;

    const fetchData = () => {
   
            axios.get(url).then((response) => {
             setOffer(response.data);
            
            });
          }
    
    
    
    
  useEffect(() => {
   console.log("called");
    fetchData();
  },[3]);


    return(
        <BodyContainer>
            <Grid container spacing={2}>

            {offer &&
              offer.map((offer, index) => {
                return (
           
                <Grid item sm={6}>
                    <OfferMenu                     
                    key={index}
                    image={offer.pic}
                    dishname={offer.name}
                    description={offer.description_en}
                    actualprice={offer.price}
                    offerprice={offer.disprice}
                    />
                </Grid>
                
                )
            })}
            </Grid>
        </BodyContainer>
    )
    
}

export default OfferBody;
