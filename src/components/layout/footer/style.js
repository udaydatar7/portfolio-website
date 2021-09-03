import styled from 'styled-components';
import variables from '../../../data/variables';

export const FooterStyle = styled.footer`
	padding-top: 1rem;
  padding-bottom: 8rem;
	z-index: 0;
	position: relative;
	text-align: left;
	@media(min-width: ${variables.breakpointPhone}) {
		background: rgb(22,19,19);
		background: linear-gradient(to bottom, rgba(22,19,19,1) 0%, rgba(22,19,19,1) 48%, rgba(151,0,0,1) 100%);
	}
	@media(max-width: ${variables.breakpointPhone}) {
		background: rgb(22,19,19);
		background: linear-gradient(to bottom, rgba(22,19,19,1) 0%, rgba(22,19,19,1) 48%, rgba(151,0,0,1) 100%);
	}
	@media(max-width: ${variables.breakpointPhone}) {
		padding-bottom: 2rem;
		padding-left: .5rem;
		padding-right: .5rem;
		text-align: center;
	}
	.quote {
		font-size: 4rem;
		font-family: "GT-Walsheim-Pro-Bold";
		line-height: 1.2;
		color: ${variables.primary};
		@media(max-width: ${variables.breakpointPhone}) {
			font-size: 2rem;
		}
	}
`;

export const SubRight = styled.p`
	font-size: 1rem;
	line-height: 1.8;
	letter-spacing:2px;
	text-transform: capitalize;
	margin-bottom: 20px;
	font-family: "GT-Walsheim-Pro-Bold";
	color: #fff;
`	
export const CopyRight = styled.p`
	color: #fff;
	font-size: 11px;
	line-height: 1.8;
	letter-spacing:1px;
`
export const FooterBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	@media(max-width: ${variables.breakpointPhone}) {
		grid-template-columns: 1fr;
	}
`
export const FooterSocialMedia = styled.ul`
	list-style: none;
	padding-left: 0;
	@media(max-width: ${variables.breakpointPhone}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	li {
		margin-bottom: 1.5rem;
	}
`
export const MediaLink = styled.a`
	padding: 1rem 0rem;
	padding-bottom: .5rem;
	line-height: 1;
	font-size: 1rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
	color: ${variables.primary};
	
`