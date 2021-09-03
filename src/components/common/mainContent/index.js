import styled from 'styled-components';
import variables from '../../../data/variables';

export const MainContent = styled.div`
  @media(min-width: ${variables.breakpointPhone}) {
    background:rgb(22, 19, 19);
    // background: rgb(0,0,0);
    // background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(71,8,8,1) 75%, rgba(251,0,0,1) 100%);
  }

  @media(max-width: ${variables.breakpointPhone}) {
    background:rgb(22, 19, 19);
    // background: rgb(0,0,0);
    // background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(71,8,8,1) 75%, rgba(251,0,0,1) 100%);
  }
`