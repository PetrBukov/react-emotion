import React from 'react';
import styled, { css } from 'react-emotion';

const Button = ({onClick,className = '',children, imgUrl, disabled}) =>
	<StyledButton
		onClick={onClick}
		className={className}
		type="button"
		imgUrl={imgUrl}
		disabled={disabled}
	>
		{children}
	</StyledButton>

const classNames = {
	scansHistoryBtn: css`
		font-size: 18px;
		line-height: 22px;
		text-decoration: underline;
		color: #006ce5;
		transition: 0.2s;
		filter: hue-rotate(0deg);
		padding: 5px 5px 5px 35px;
		background-repeat: no-repeat;
		background-position: left center;

		&:hover {
			text-decoration: none;
		}
	`,
	ProblemBtn: css`
		font-size: 18px;
		line-height: 22px;
		text-decoration: underline;
		color: #b70f0a;
		transition: 0.2s;
		filter: hue-rotate(0deg);
		padding: 5px 5px 5px 35px;
		background-repeat: no-repeat;
		background-position: left center;

		&:hover {
			text-decoration: none;
		}
	`,
	LogoutBtn: css`
		position: absolute;
		top: 12px;
		padding: 5px 35px 5px 5px;
		font-size: 18px;
		line-height: 22px;
		right: 65px;
		text-decoration: underline;
		color: #006ce5;
		transition: 0.2s;

		background-repeat: no-repeat;
		background-position: right center;

		@media (max-width: 620px) {
			position: static;
			order: -1;
			align-self: flex-end;
			margin-right: 15px;
		}

		&:hover {
			text-decoration: none;
		}
	`,
	donateCardBtn: css`
		width: 99px;
		height: 39px;
		border: 1px solid #d6d6d6;
		border-radius: 3px;
		margin-right: 10px;
		font-size: 14px;
		transition: 0.3s;

		&:hover {
			background-color: #dc4c18;
			color: #ffffff;
		}
		&[disabled] {
			display: none;
		}
	`,
	BarcodeFormBtn: css`
		width: 87px;
		font-size: 17px;
		transition: 0.3s;
		
		&:hover {
			background-color: #d6d6d6;
			color: #ffffff;
		}
	`
}

const StyledButton = styled('button')`
// Стандартные стили для всех кнопок

	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0px;
	background-image: url(${props => props.imgUrl});
	color:  #3b3b3b;

// добавляем стили в зависимости от значения className
	${props => classNames[props.className]};
`

export default Button;