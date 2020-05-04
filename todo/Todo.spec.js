import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Todo from './Todo';

describe('todo', () => {
  it('should set text correctly', () => {
    const todoValue = { text: 'learn react' };
    const wrapper = shallow(<Todo todo={todoValue} />);
    expect(wrapper.find('ItemText').text()).toEqual('learn react');
  });

  it('should call delete handler on button click', () => {
    const onDeleteSpy = sinon.spy();
    const wrapper = shallow(<Todo onDelete={onDeleteSpy} idx={0} />);
    wrapper.find('button').simulate('click');
    sinon.assert.calledOnce(onDeleteSpy);
    sinon.assert.calledWith(onDeleteSpy, 0);
  });
});