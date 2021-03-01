import React, { CSSProperties, FC, } from 'react';

interface ButtonProps {
	className?: string
	style?: CSSProperties
}

const BaseButton: FC<ButtonProps> = (props) => {
	const {className, style, children, ...rest} = props;

	return (
		<button className={`${className}`} style={style} {...rest}>
			{children}
		</button>
	);
}

export const PrimaryButton: FC<ButtonProps> = (props) => {
	const {className, style, children, ...rest} = props;

	return (
		<BaseButton className={`bg-blue-500 ${className}`} style={style} {...rest}>
			{children}
		</BaseButton>
	);
}