import React from 'react';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

const defaultProps = {
  timelineData: [
    {
      type: 'date',
      iconStyle: 'btn-primary',
      title: 'Today',
    },
    {
      type: 'time',
      alignment: '',
      time: '3 min ago',
      icon: 'check',
      iconStyle: 'btn-info',
      title: 'Joined CleanPower.Pro',
      content: "Welcome to the world's largest clean energy sales training community."
    }
  ],
};

const shallowRender = (props = defaultProps) => (
  shallow(
    <Timeline {...props} />
  )
);

test('Timeline renders TimelineItems with proper props.', () => {
  const timeline = shallowRender();
  const timelineItems = timeline.find('TimelineItems');
  expect(timelineItems.props().timelineData).toEqual(defaultProps.timelineData);
});
