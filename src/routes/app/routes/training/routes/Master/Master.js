import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import 'styles/custom/training/certification.css';
import Divider from 'material-ui/Divider';
import {Helper,QuestionAnswer} from './Helper.js';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class VideoHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.TabOpen,
      latest: this.props.latest1,
      tasks: [{id:"1",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"2",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"3",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"4",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},]
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

        <Tab label="CERTIFICATIONS" value="certifications" containerElement={<Link to="/app/training/certifications"/>}>
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

        <Tab label="PACKS" value="packs" containerElement={<Link to="/app/training/packs"/>}>
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
          <Divider />
          <div className="row Helper-tab">
          <QuestionAnswer/>
          </div>
          <Divider />
          <h4><b>Solar Basics "instead of “Popular uploads” shown on youtube example"</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
    	  <Divider />
          <h4><b>Solar Basics "Lead Generation  (instead of “Overtime:  Realtime with Bill Maher” shown on youtube example)"</b></h4>	
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
          <Divider />
          <h4><b>Solar Basics "Sales Basics"</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
          <Divider />
          <h4><b>Solar Basics "Motivational Selling"</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
        </Tab>

        <Tab label="SINGLES" value="singles" containerElement={<Link to="/app/training/singles"/>}>
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
          <Divider />
          <div className="row Helper-tab">
          <QuestionAnswer/>
          </div>
          <Divider />
          <h4><b>Lead Gen</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
    	  <Divider />
          <h4><b>Referral Gen</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
          <Divider />
          <h4><b>Net Promoter Score</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
        </Tab>

        <Tab label="PROS" value="pros" containerElement={<Link to="/app/training/pros"/>}>
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
          <Divider />
          <div className="row Helper-tab">
          <QuestionAnswer/>
          </div>
          <Divider />
          <h4><b>Kent Halliburton</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
    	  <Divider />
          <h4><b>Steven Broyles</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
          <Divider />
          <h4><b>Alex Aldrich</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
        </Tab>

        <Tab label="VENDORS" value="vendors" containerElement={<Link to="/app/training/vendors"/>}>
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
          <Divider />
          <div className="row Helper-tab">
          <QuestionAnswer/>
          </div>
          <Divider />
          <h4><b>HelioScope</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
    	  <Divider />
          <h4><b>SolarEdge</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
          <Divider />
          <h4><b>Tesla Energy</b></h4>
          <div className="row">
            {
              this.state.tasks.map(
              (tasks,index)=>{return <Helper key={tasks.id} path={tasks.path} description={tasks.description} time={tasks.time} index={index}/>
              })
            }
          </div>
        </Tab>

        <Tab label='SEARCH' value="f" containerElement={<Link to="/app/training/upload"/>}>
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
            </p>
          </div>
        </Tab>
        
        <Tab label='PLAYBACK' value="f" containerElement={<Link to="/app/training/VideoPlayback"/>}>
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
            <source src={this.props.path} type="video/mp4"/>
            <track label="English" kind="subtitles" srcLang="en" default />
        </Video>
        <h1>{this.props.description}</h1>
        <p>{this.props.time}</p>
     </div>
    );
  }
}






