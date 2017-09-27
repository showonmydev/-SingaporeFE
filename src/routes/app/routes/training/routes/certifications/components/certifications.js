import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Tabs, Tab} from 'material-ui/Tabs';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import 'styles/custom/training/certification.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class VideoHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      latest: {id:"1",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"MILO Confront the panel | Overtime with Bill Maher",time:"6.4M view . 6 months ago",name:"Video"},
      tasks: [{id:"1",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"2",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"3",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"4",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"5",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"6",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"7",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"8",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"9",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"10",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"11",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"12",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},]
          };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
    <div className="container-fluid no-breadcrumbs page-dashboard">
    <div className="box-body">
    <div className="row">
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >

        <Tab label="CERTIFICATIONS" value="a">
          <div className="row main-video">
            <div className="col-xl-12 video-thum-section">
                <div className="col-xl-4 left-full-video">

                  <Video loop muted
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    onCanPlayThrough={() => {
                        // Do stuff 
                    }}>
                    <source src={this.state.latest.path} type="video/webm" />
                    <track label="English" kind="subtitles" srcLang="en" default />
                  </Video>


                
                </div>
                <div className="col-xl-8 right-full-video">
                <h1>{this.state.latest.description}</h1>
                <p>{this.state.latest.time}</p>
                </div>
            </div>
          </div>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <VideoSection key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
        </Tab>

        <Tab label="PACKS" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
            </p>
          </div>
        </Tab>

        <Tab label="SINGLES" value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
            </p>
          </div>
        </Tab>

        <Tab label="PROS" value="d">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
            </p>
          </div>
        </Tab>

        <Tab label="VENDORS" value="e">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
            </p>
          </div>
        </Tab>

        <Tab label="SEARCH" value="f">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
            </p>
          </div>
        </Tab>

      </Tabs>
      </div>
      </div>
      </div>
    );
  }
}


class VideoSection extends React.Component
{
  render(){
    return(
      <div className="col-xl-3 video-thum-section">
       <Video loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            onCanPlayThrough={() => {
                // Do stuff 
            }}>
            <source src={this.props.path} type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" default />
        </Video>
        <h1>{this.props.description}</h1>
        <p>{this.props.time}</p>
     </div>
    );
  }
}



module.exports = VideoHomePage;
