import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Hero } from '../../pages/routes/faqs/components/FAQs';
import { CardWhite } from '../../ui/routes/cards/components/Cards';

const dummyInfo = [
  {
    title: 'Buy Solar + Storage Leads',
    description: 'CleanPower.Pros are always in the field generating outstanding sales prospects for solar PV and energy storage systems. Jumpstart your sales by buying exclusive sales leads.',
    learnLink: 'javascript:;',
    goLink: 'javascript:;'
  },
  {
    title: 'Sell Solar + Storage Leads',
    description: 'Qualified CleanPower.Pros can sell their solar + storage leads directly to leading installers in their region. Earn a consistent income by selling your exclusive sales leads.',
    learnLink: 'javascript:;',
    goLink: 'javascript:;'
  },
  {
    title: 'Hire CleanPower.Pros',
    description: 'Interested in building your own team of field sales professionals? Hire CleanPower.Pros through our skills marketplace. You can hire top talent only in your target markets.',
    learnLink: 'javascript:;',
    goLink: 'javascript:;'
  },
];

const sectionStyle = {
  paddingLeft: '30px',
  paddingRight: '30px'
};

const containerStyle = {
  paddingTop: '50px',
  borderTop: '1px solid rgba(0, 0, 0, 0.118)'
};

const Market = () => (
  <section style={sectionStyle}>
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Hero /></div>
      <div key="2" className="row" style={containerStyle}>
        {
          dummyInfo.map((item, idx) => (<CardWhite key={`card-${idx}`} cardInfo={item} />))
        }
      </div>
    </QueueAnim>
  </section>
);

export default Market;
