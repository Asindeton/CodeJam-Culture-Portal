import React from 'react';
import { input } from '@storybook/react/demo';

export default { title: 'Input' };

export const inputText = () =>(<form> <input type="number" value="Input" readonly/></form>);
