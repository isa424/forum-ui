import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavLink, Link, LinkProps } from '../src';

const meta: Meta = {
	title: 'Link',
	component: Link,
	argTypes: {},
	parameters: {},
};

export default meta;

const Template: Story<LinkProps> = args => (<p>{'Lorem ipsum'} <Link {...args}>{'link'}</Link> {'random text'}</p>);

export const Default = Template.bind({});

Default.args = {
	href: '/',
};

const NavTemplate: Story<LinkProps> = args => <NavLink {...args}>{'Test Link'}</NavLink>

export const Nav = NavTemplate.bind({});

Nav.args = {
	href: '/',
};
