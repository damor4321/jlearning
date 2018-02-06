import expect, { createSpy } from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AnotherIcon from './';

const renderComponent = props => shallow(<AnotherIcon {...props} />);
const onClick = createSpy();
const props = {
  onClick,
};

test('AnotherIcon renders without errors', () => {
  renderComponent();
});

it('AnotherIcon invokes onClick prop when recieves onClick event', () => {
  const wrapper = renderComponent(props);
  wrapper.simulate('click');
  expect(onClick).toHaveBeenCalled();
});
