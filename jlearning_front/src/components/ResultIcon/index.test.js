import React from 'react';
import { shallow } from 'enzyme';
import ResultIcon from './';

const renderComponent = props => shallow(<ResultIcon {...props} />);

test('ResultIcon renders without errors', () => {
  renderComponent();
});
