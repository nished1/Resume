import React from 'react';
import styled from "styled-components";
import ProfileComponent from "./ProfileComponent"
import EducationBlock from './EducationBlock';
import WorkExperience from './WorkExperience';
import Skills from './Skills'
import AdditionalInfo from './AdditionalInfo';
import Licensure from './Licensure';
const GridContainer = styled.div`
width: 100  %;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  border:2px solid: #fff;
  padding: 30px; 
  overflow:hidden;

;`
const ImageContainer = styled.div`
width:50%;
height:900px;

;`
const ContentContainer = styled.div`
width:90%;
display:inliine-block;
box-sizing:border-box;
height:auto;

;`
const LandingPage = () => {
    return (

        <GridContainer>
            <ImageContainer>
                <ProfileComponent /><br />
                <Skills />
            </ImageContainer>
            <ContentContainer>
                <WorkExperience /><br />
                <EducationBlock /><br/>
                <AdditionalInfo /><br/>
                <Licensure />
            </ContentContainer>

        </GridContainer>
    )

}
export default LandingPage