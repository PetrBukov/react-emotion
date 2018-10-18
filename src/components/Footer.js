import React from 'react';
import styled from 'react-emotion';
import ImgPlanet from '../img/planet.jpg';


const Footer = props => 
	<StyledFooter>
		<img src={ImgPlanet} alt="planet logo"/>
		<Copyright>A brand © {props.currentYear} All Right Reserved - My company</Copyright>
	</StyledFooter>



const Copyright = styled('div')`
	font-size: 14px;
	line-height: 20px;
	margin: 14px 10px;
	text-align: center;
`

const StyledFooter = styled('footer')`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 17px;
`

export default Footer;