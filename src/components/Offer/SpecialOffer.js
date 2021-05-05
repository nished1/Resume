import React from 'react';

import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import OfferModal from './OfferModal';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


const SpecialContainer = styled.div`
`


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '60%',
        margin: 'auto',
        overflowX:'hidden',
        overflowY:'auto',

        [theme.breakpoints.down('md')]: {
            maxWidth: '90%',
            alignItems: 'baseline',
          },

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },

 
}));




const SpecialOffer = ({ open, setOpen,setfix,offerdetail }) => {
    const classes = useStyles();
   
  
        const handlefix =() => {
            setOpen(false);
            setfix(false);
          }
          
        return (
            <>
          {open ? (
   
        <SpecialContainer>
          
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handlefix}
               
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
               
                    <div className={classes.paper}>
                        <OfferModal offerdetail={offerdetail} handlefix={handlefix} />
                    </div>
                </Fade>
            </Modal>
        </SpecialContainer>
     ) : null}
     </>
    )
    
}

export default SpecialOffer;