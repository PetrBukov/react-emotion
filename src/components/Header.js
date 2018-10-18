import React from 'react';
import styled from 'react-emotion';
import Button from './Button';
import LogoutImg from '../img/logot.jpg';

const Header = props => 
	<StyledHeader 
		titleColor={props.titleColor}
	>
		<h1>
			<span>My company</span>
			<span>{props.myCompany}</span>
		</h1>
		<Button 
			className="LogoutBtn"
			onClick={() => console.log('Click')} 
			imgUrl={LogoutImg}
		>
			Logout
		</Button>
	</StyledHeader>


const StyledHeader = styled('header')`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-top: 23px;
	h1 {
		display: flex;
		flex-direction: column;
		margin: 0px;
		text-align: center;
		color: ${props => props.titleColor};
	}
	h1 span {
		font-size: 26px;
		line-height: 51px;
		font-weight: normal;
	}
	h1 span:first-of-type {
		font-size: 48px;
		line-height: 55px;
		font-weight: bold;
	}
`

export default Header;