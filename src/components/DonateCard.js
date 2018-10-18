import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from "prop-types";

import Button from './Button';
import HistoryImg from '../img/history.jpg';
import BugImg from '../img/bug.jpg'


class DonateCard extends Component {
  static propTypes = {
  	donateCardInfo: PropTypes.shape({
	    decision: PropTypes.string,
	    category: PropTypes.string,
	    slp: PropTypes.string,
	    upc: PropTypes.string,
	    price: PropTypes.number,
	    imageUrl: PropTypes.string,
	    canVoid: PropTypes.bool,
	    canReprint: PropTypes.bool,
	    isVoided: PropTypes.bool,
    }),
  };
  


  render() {

  	const {
  		decision,
	    category,
	    slp,
	    upc,
	    price,
	    imageUrl,
	    canVoid,
	    canReprint,
	    isVoided
	} = this.props.donateCardInfo;

    return (
      <StyledDonateCard>
      	<DonateCardTitle>donate</DonateCardTitle>
      	<DonateCardContent data-isvoided={isVoided}>
      		<DonateCardImg 
      			className={css`
      				background-image: url(${imageUrl});
      			`}
      		/>
      		<DonateCardInfo>
      			<div
      				className={css`
						font-size: 18px;
      				`}
      			>
      				{category}
      			</div>
      			<h3
      				className={css`
						margin: 7px 0px 0px 0px;
						font-weight: normal;
						font-size: 22px;
      				`}
      			>
      				{decision}
      			</h3>
      			<div
      				className={css`
						font-size: 14px;
						line-height: 27px;
      				`}
      			>
      				<span>SLP: {slp}</span> / <span>UPC: {upc}</span>
      			</div>
      			<div
      				className={css`
      				    font-size: 48px;
      					line-height: 84px;
      				`}
      			>
      				${price}
      			</div>
      			<div>
      				<Button
      					className="donateCardBtn"
      					disabled={isVoided ? true : !canVoid} 
      					onClick={this.props.voidDonate}
      				>
      					Void
      				</Button>
      				<Button
      					className="donateCardBtn"
      					disabled={isVoided ? true : !canReprint}
      					onClick={() => console.log('Void')}
      				>
      					Reprint
      				</Button>
      			</div>
      		</DonateCardInfo>
      	</DonateCardContent>
      	<DonateCardBotoomBtns>
  			<Button 
  				className="scansHistoryBtn"
  				imgUrl={HistoryImg}
  				onClick={() => console.log('history clcik!')}
  			>
  				Scans history
  			</Button>
      		<Button
      			className="ProblemBtn"
      			imgUrl={BugImg}
  				onClick={() => console.log('Bug clcik!')}
      		>Problem with product details</Button>
  		</DonateCardBotoomBtns>
      </StyledDonateCard>
    );
  };
}

const StyledDonateCard = styled('div')`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 718px;
	align-self: center;
	margin: 40px 0px 0px 0px;
`

const DonateCardTitle = styled('h2')`
	background-color: #dc4c18;
	border: 1px solid #d6d6d6;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	margin: 0px;
	color: #ffffff;
	text-transform: uppercase;
	justify-content: center;
	align-items: center;
	display: flex;
	height: 90px;
	font-size: 50px;
	letter-spacing: -1.6px;
`

const DonateCardContent = styled('div')`
	min-height: 254px;
	border: 1px solid #d6d6d6;
	border-top: none;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	padding: 24px 10px 24px 18px;
	display: flex;
	margin-bottom: 10px;
	position: relative;
	overflow: hidden;

	&[data-isvoided="true"]::after {
		position: absolute;
		width: 100%;
		height: 100%;
		content: 'Voided';
		background-color: rgba(183, 13, 10, 0.3);
		bottom: 0px;
		left: 0px;
		color: #b70f0a;
		font-size: 37px;
		font-weight: bold;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding-bottom: 18px;
	}

	@media (max-width: 463px) {
		flex-direction: column
	}
`

const DonateCardImg = styled('div')`
	flex-basis: 173px;
	min-height: 209;
	background-repeat: no-repeat;
	background-size: contain;
	flex-shrink: 0;
	background-position: top center;

	@media (max-width: 463px) {
		margin-bottom: 15px;
	}
`

const DonateCardInfo = styled('div')`
	padding: 0px 0px 0px 13px;
`

const DonateCardBotoomBtns = styled('div')`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 440px) {
		justify-content: center;
	}
`

export default DonateCard;