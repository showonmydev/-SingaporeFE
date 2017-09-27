import React from 'react';
import QueueAnim from 'rc-queue-anim';

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
    title: 'Go hiking',
    content: 'Consectetur adipisicing elit. Error, accusantium debitis voluptatem dolore excepturi ducimus fugiat nulla perspiciatis quo ipsum non eligendi nisi veniam maxime in quas atque omnis cumque!'
  },
  {
    type: 'time',
    alignment: 'alt',
    time: '1 hour ago',
    icon: 'shopping_cart',
    iconStyle: 'btn-warning',
    title: 'Buy some toys',
    content: 'Ullam, commodi, modi, impedit nostrum odio sit odit necessitatibus accusantium enim voluptates culpa cupiditate cum pariatur a recusandae tenetur aspernatur at beatae.'
  },
  {
    type: 'time',
    alignment: '',
    time: '3 hours ago',
    icon: 'camera',
    iconStyle: 'btn-success',
    title: 'Soluta nihil',
    content: 'Incidunt, molestias odio soluta nihil accusantium sit nostrum doloremque. Recusandae, ullam, odio consequatur facere totam reiciendis similique dicta explicabo!'
  },
  {
    type: 'time',
    alignment: 'alt',
    time: '7 hours ago',
    icon: 'check',
    iconStyle: 'btn-danger',
    title: 'Odio sit odit necessitatibus',
    content: 'Ullam, commodi, modi, impedit nostrum odio sit odit necessitatibus accusantium enim voluptates culpa cupiditate cum pariatur a recusandae tenetur aspernatur at beatae.'
  },
  {
    type: 'time',
    alignment: '',
    time: '10 hours ago',
    icon: 'alarm',
    iconStyle: 'btn-primary',
    title: 'Accusantium sint',
    content: 'Ipsam, minus, quam, sit officiis accusantium sint voluptates voluptatibus minima cum non quos corrupti dolorem eligendi modi eius magnam unde!'
  },
  {
    type: 'date',
    iconStyle: 'btn-danger',
    title: 'Yesterday',
  },
  {
    type: 'time',
    alignment: 'alt',
    time: '8:30 PM',
    icon: 'comment',
    iconStyle: 'btn-warning',
    title: 'Enim asperiores facere',
    content: 'Odit, iusto, dolorem, aut ipsum rem atque enim asperiores facere tempore explicabo omnis corporis hic! Molestias, dolores, iure esse at illo aliquam temporibus in eum cupiditate magni velit eveniet unde facilis quisquam numquam nihil atque tempore vitae porro maxime repellendus quas a sit repellat delectus expedita nam natus fugiat ut ipsam eaque voluptates omnis ratione?'
  },
  {
    type: 'time',
    alignment: '',
    time: '7:00 PM',
    icon: 'folder',
    iconStyle: 'btn-success',
    title: 'Illum veniam atque',
    content: 'Illum veniam atque iste voluptatem eos saepe quisquam aperiam voluptatum sunt.'
  },
  {
    type: 'time',
    alignment: 'alt',
    time: '12:55 PM',
    icon: 'folder',
    iconStyle: 'btn-danger',
    title: 'Voluptas molestias',
    content: 'At, veniam, officia pariatur voluptas molestias nobis distinctio quo temporibus! Nisi, fugit, ipsum, veritatis, optio consectetur nam molestiae quidem placeat deleniti animi ad nobis iure modi eius recusandae odio adipisci nesciunt.'
  },
  {
    type: 'time',
    alignment: '',
    time: '10:13 AM',
    icon: 'email',
    iconStyle: 'btn-primary',
    title: 'Nulla magni sequi',
    content: 'Laborum, ducimus, perferendis nulla magni sequi cumque nisi eum praesentium omnis voluptas id molestias adipisci accusamus nobis totam. Odit, hic suscipit necessitatibus quos'
  },
  {
    type: 'time',
    alignment: 'alt',
    time: '9:10 AM',
    icon: 'card_giftcard',
    iconStyle: 'btn-info',
    title: 'Sed cumque temporibus',
    content: 'Deserunt sed cumque temporibus. Doloribus, iste, sit recusandae fugiat assumenda ea magni at doloremque ipsum amet molestias error mollitia maxime ad alias eos id cumque corporis placeat nisi a quaerat nemo magnam ab numquam ratione facere dolorum. Cumque, dolores, sint molestiae eaque quibusdam illo error!'
  }
];

class TimeItem extends React.Component {
  render() {
    return (
      <article className={`tl-item ${this.props.alignment}`}>
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">{this.props.time}</div>
            <div className={`tl-icon btn-icon-round btn-icon btn-icon-thin ${this.props.iconStyle}`}><i className="material-icons">{this.props.icon}</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">{this.props.title}</h4>
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

class DateItem extends React.Component {
  render() {
    return (
      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-caption">
              <a href="javascript:;" className={`btn ${this.props.iconStyle} btn-block`}>{this.props.title}</a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export class TimelineItems extends React.Component {
  render() {
    return (
      <div className="ui-timline-container">
        <section className="ui-timeline">

          {
            this.props.timelineData.map((item, idx) => (
              item.type === 'date' ?
                <DateItem
                  key={`timeline-${idx}`}
                  iconStyle={item.iconStyle}
                  title={item.title}
                  /> :
                <TimeItem
                  key={`timeline-${idx}`}
                  alignment={item.alignment}
                  time={item.time}
                  icon={item.icon}
                  iconStyle={item.iconStyle}
                  title={item.title}
                  content={item.content}
                  />
            ))
          }

        </section>
      </div>
    );
  }
}

const Page = () => (
  <div className="container-fluid with-maxwidth chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><TimelineItems timelineData={timelineData} /></div>
    </QueueAnim>
  </div>
);

export default Page;
