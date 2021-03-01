import React, { CSSProperties, FC, HTMLAttributes, } from 'react';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
	className?: string
	href?: HTMLAnchorElement['href']
	style?: CSSProperties;
}

const BaseLink: FC<LinkProps> = (props) => {
	const { href, className, style, children, ...rest} = props;

	return (
		<a href={href} className={`no-underline hover:underline ${className}`} style={{...style}} {...rest}>
			{children}
		</a>
	);
};

export const Link: FC<LinkProps> = (props) => {
	const {children, ...rest} = props;

	return (
		<BaseLink className={'text-blue-700 visited:text-blue-700'} {...rest}>{children}</BaseLink>
	);
}

export const NavLink: FC<LinkProps> = (props) => {
	const {children, ...rest} = props;

	return (
		<BaseLink className={'text-white visited:text-white'} {...rest}>{children}</BaseLink>
	);
}
