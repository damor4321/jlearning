import expect, { createSpy } from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import RecorderIcon from './';

const renderComponent = props => shallow(<RecorderIcon {...props} />);
const onClick = createSpy();
const props = {
  onClick,
};

test('RecorderIcon renders without errors', () => {
  renderComponent();
});

it('RecorderIcon invokes onClick prop when recieves onClick event', () => {
  const wrapper = renderComponent(props);
  wrapper.simulate('click');
  expect(onClick).toHaveBeenCalled();
});
