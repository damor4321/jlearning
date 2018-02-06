import React from 'react';
import { shallow } from 'enzyme';
import Statement from './';

const renderComponent = props => shallow(<Statement {...props} />);

test('Statement renders without errors', () => {
  renderComponent();
});
