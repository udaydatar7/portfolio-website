import Img from "gatsby-image"
import styled from 'styled-components';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-color:#fff;
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
    text-color: #fff
  }
`
export const Avatar =styled(Img)`
  border-radius: 15px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  color: #fff;
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
    
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #fff;
  a {
    color: #fff;
    text-decoration: underline;
  }
`
export const SubTitle = styled.h2`
  font-family: "GT-Walsheim-Pro-Medium";
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  color:#fff
  @media(min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
  }
`