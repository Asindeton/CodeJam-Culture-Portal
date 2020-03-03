import React from 'react';
import { Button } from '@storybook/react/demo';
import './navigation.css';

export default { title: 'Button' };

export const button = () => <button className='button'>Button</button>;

export const button2 = () => (
  <button class='data-button'>
    Button
  </button>
);
