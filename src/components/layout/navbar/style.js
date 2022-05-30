import styled from "styled-components";
import variables from '../../../data/variables';

export const NavbarLogo = styled.div`
  a {
    color: ${variables.inverse};
    font-size: 2.3rem;
    font-family: "GT-Walsheim-Pro-Bold";
  }
  @media(max-width: ${variables.breakpointPhone}) {
    display: none
  }
`

export const NavbarElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: right;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: right;
    width: 100%;
  }
`

export const NavbarList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  > li a {
    font-size: 1.2rem;
    color: #fff;
    padding: .5rem .2rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: right;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span, 
    svg {
      display: block;
      vertical-align: right;
    }
    @media(max-width: ${variables.breakpointPhone}) {
      font-size: 1rem;
    }
  }
`

