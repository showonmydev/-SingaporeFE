import React from 'react';
import { Blog } from '../../pages/routes/blog/components/Blog';

const timelineData = [
  {
    title: 'Dolor sit amet, consectetur adipisicing elit.',
    avatar: 'assets/images-demo/avatars/1.jpg',
    author: 'Jason Bourne',
    category: 'Web Design'
  }, {
    title: 'Repellat quo rerum iure dolor cumque',
    avatar: 'assets/images-demo/avatars/2.jpg',
    author: 'Bella Swan',
    category: 'Development'
  }, {
    title: 'Eligendi doloribus quam amet provident est recusandae ipsum voluptatem',
    avatar: 'assets/images-demo/avatars/3.jpg',
    author: 'Min Chan',
    category: 'Web Design'
  }
];

class Feed extends React.Component {
  render() {
    return (
      <div className="container-fluid with-maxwidth chapter">
        <Blog blogData={timelineData} />
      </div>
    );
  }
}

export default Feed;
