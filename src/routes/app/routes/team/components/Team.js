import React from 'react';
import QueueAnim from 'rc-queue-anim';
import IconButton from 'material-ui/IconButton/IconButton';
import HeroWithSearchBar from './HeroWithSearchBar';
import ImageCardWithProfile from '../../mentors/components/ImageCard';

const sampleData1 = [
  {
    name: 'Julia',
    backImgUrl: 'assets/images-demo/assets/600_400-1.jpg',
    userImgUrl: 'assets/images-demo/avatars/1.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Anne',
    backImgUrl: 'assets/images-demo/assets/600_400-2.jpg',
    userImgUrl: 'assets/images-demo/avatars/2.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Amy',
    backImgUrl: 'assets/images-demo/assets/600_400-3.jpg',
    userImgUrl: 'assets/images-demo/avatars/3.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  }
];

const sampleData2 = [
  {
    name: 'Julia',
    backImgUrl: 'assets/images-demo/assets/600_400-1.jpg',
    userImgUrl: 'assets/images-demo/avatars/1.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Anne',
    backImgUrl: 'assets/images-demo/assets/600_400-2.jpg',
    userImgUrl: 'assets/images-demo/avatars/2.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Amy',
    backImgUrl: 'assets/images-demo/assets/600_400-3.jpg',
    userImgUrl: 'assets/images-demo/avatars/3.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Anne',
    backImgUrl: 'assets/images-demo/assets/600_400-4.jpg',
    userImgUrl: 'assets/images-demo/avatars/4.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Amy',
    backImgUrl: 'assets/images-demo/assets/600_400-5.jpg',
    userImgUrl: 'assets/images-demo/avatars/5.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Amy',
    backImgUrl: 'assets/images-demo/assets/600_400-1.jpg',
    userImgUrl: 'assets/images-demo/avatars/1.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Anne',
    backImgUrl: 'assets/images-demo/assets/600_400-2.jpg',
    userImgUrl: 'assets/images-demo/avatars/2.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  },
  {
    name: 'Amy',
    backImgUrl: 'assets/images-demo/assets/600_400-3.jpg',
    userImgUrl: 'assets/images-demo/avatars/5.jpg',
    description: 'I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.',
  }
];

const sectionTitleStyle = {
  margin: '40px 0 30px',
  paddingTop: '40px',
  borderTop: '1px solid rgba(0, 0, 0, 0.117647)'
};

const HeaderIconButtonStyle = {
  position: 'fixed',
  right: 0,
  top: '60px',
  width: '48px',
  height: '48px'
};

class Team extends React.Component {
  state = {
    isHeaderCollapsed: false
  }

  toggleHeaderSection = () => {
    this.setState({
      isHeaderCollapsed: !this.state.isHeaderCollapsed
    });
  }

  render() {
    return (
      <div className="container-fluid no-breadcrumbs page-mentors">

        <QueueAnim type="bottom" className="ui-animate">
          <HeroWithSearchBar isCollapsed={this.state.isHeaderCollapsed} />

          <h2 className="article-title" style={sectionTitleStyle}>My Team Members</h2>
          <div className="row">
            {
              sampleData1.map((userInfo, idx) => (<ImageCardWithProfile key={`my-mentor-${idx}`} userData={userInfo} />))
            }
          </div>

          <h2 className="article-title" style={sectionTitleStyle}>Invite Team Members</h2>
          <div className="row">
            {
              sampleData2.map((userInfo, idx) => (<ImageCardWithProfile key={`browse-mentor-${idx}`} userData={userInfo} />))
            }
          </div>

          <IconButton
            style={HeaderIconButtonStyle}
            className="md-button header-btn"
            onClick={this.toggleHeaderSection}>
            <i className="material-icons">{ this.state.isHeaderCollapsed ? 'expand_more' : 'expand_less' }</i>
          </IconButton>
        </QueueAnim>

      </div>
    );
  }
}

export default Team;
