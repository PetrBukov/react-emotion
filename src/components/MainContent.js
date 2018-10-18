import React from 'react';
import styled from 'react-emotion';
import BarcodeForm from './BarcodeForm'
import DonateCard from './DonateCard'

const MainContent = props => 
	<StyledMainContent>
		<BarcodeForm/>
		<DonateCard 
			donateCardInfo={props.donateCardInfo}
			voidDonate={props.voidDonate}
		/>
	</StyledMainContent>


const StyledMainContent = styled('main')`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 0px 15px;
	justify-content: center;
`

export default MainContent;