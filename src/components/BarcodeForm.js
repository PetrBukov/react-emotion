import React from 'react';
import styled from 'react-emotion';
import Button from './Button';

const BarcodeForm = ({onSubmit,className = ''}) =>
	<StyledBarcodeForm>
		<input type="text" placeholder="Enter barcode"/>
		<Button
			className="BarcodeFormBtn"
			onClick={() => console.log('Click')} 
		>
			ОК
		</Button>
	</StyledBarcodeForm>

const StyledBarcodeForm = styled('form')`
	display: flex;
	align-self: center;
	width: 100%;
	max-width: 465px;
	height: 53px;
	border: 1px solid #d6d6d6;
	border-radius: 3px;

	input {
		bakcground-color: transparent;
		border: none;
		border-right: 1px solid #d6d6d6;
		flex-grow: 1;
		font-size: 18px;
		padding: 15px 23px;
		line-height: 20px;
		width: 200px;
	}
	input::-moz-placeholder { color: #999999; }
	input::-webkit-input-placeholder { color: #999999; }
`

export default BarcodeForm;