import expect, { createSpy } from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from './';

const renderComponent = props => shallow(<ToggleButton {...props} />);
const onToggle = createSpy();
const props = {
  onToggle,
};

test('ToggleButton renders without errors', () => {
  renderComponent();
});

it('ToggleButton invokes onClick prop when recieves onToggle event', () => {
  const wrapper = renderComponent(props);
  wrapper.simulate('toggle');
  expect(onToogle).toHaveBeenCalled();
});
