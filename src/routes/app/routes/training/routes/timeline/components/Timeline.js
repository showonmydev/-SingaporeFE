import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { TimelineItems } from '../../../../ui/routes/timeline/components/Timeline';

const timelineData = [
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
];

class Timeline extends React.Component {
  render() {
    return (
      <div className="container-fluid with-maxwidth chapter">
        <TimelineItems timelineData={timelineData} />
      </div>
    );
  }
}

export default Timeline;
