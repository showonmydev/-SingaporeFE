import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import { DefaultPlayer as Video } from 'react-html5video';
import Toggle from 'material-ui/Toggle';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import 'styles/custom/training/videoplayback.css';


const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

const VideoSearch= () => (
		<div className="col-xl-12">
		<TextField
          id="text-field-controlled"
          value=""
          hintText="Search Video"
          className="search"
        />
        <i className="material-icons">search</i>
		</div>
)


class CommentList extends React.Component {
	render() {
    return (
		<div className="col-xl-12 user-comment-list">
			<div className="user-pic">
			<ListItem
		      disabled={true}
		      leftAvatar={
		        <Avatar src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50" />
		      }
		    >
		      <b>User</b>
		    </ListItem>
		    </div>
		    <span className="icon">
       		<a href="#"><i className="material-icons">thumb_up</i></a>
       		<a href="#"><i className="material-icons">thumb_down</i></a>
       		</span>
		    <p className="timeline-video-comment">{this.props.comment}</p>
		    <div className="timeline-video-reply">
		    <p>{this.props.time}</p>
		    <a href="#">Reply</a>
		    </div>
		    
		</div>
);}
};

class VideoCommentSection extends React.Component {
	render() {
    return (
		<div className="col-xl-12 put-user-comment">
		    <TextField hintText="Enter Here your comment" fullWidth={true} />
		    
		</div>
);}
};	
		
class VideoList extends React.Component {
	render() {
    return (
	<div>
		<div className="col-xl-12 video-list">
		<div className="left-section">
		    <Video loop muted
	            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
	            onCanPlayThrough={() => {
	                // Do stuff 
	            }}>
	            <source src={this.props.path} type="video/mp4"/>
	            <track label="English" kind="subtitles" srcLang="en" default />
	        </Video>
		</div>
		
		<div className="right-section">
		<h5>{this.props.description}</h5>
        <p>{this.props.time}</p>
		</div>
		</div>
	</div>
);}
};		

class TimelineVideo extends React.Component {
	render() {
    return (
		<div className="col-xl-12">
	       	<Video loop muted
	            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
	            onCanPlayThrough={() => {
	                // Do stuff 
	            }}>
	            <source src={this.props.video.path} type="video/mp4"/>
	            <track label="English" kind="subtitles" srcLang="en" default />
	        </Video>
	        <div className="TimelineCurrVideo">
	        <span className="description">
	        <h5>{this.props.description}</h5>
       		<p>{this.props.time}</p>
       		</span>
       		</div>
       		<span className="icon">
       		<a href="#"><i className="material-icons">thumb_up</i></a>
       		<a href="#"><i className="material-icons">thumb_down</i></a>
       		</span>
      </div>
      );}
};

class VideoPlayback extends React.Component {
  constructor() {
    super()
    this.state = {
    	video : {id:"1",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
    	videolist: [{id:"1",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"2",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"3",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"4",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"5",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"6",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
              {id:"7",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},],
      commentlist: [{id:"1",comment: "You are great rob",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
      {id:"2",comment: "You are great rob",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
      {id:"3",comment: "You are great rob",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},
      {id:"4",comment: "You are great rob",description:"This is test video",time:"5M views - 6 Months ago",name:"Video"},]
    	}
  }

  render() {
    return (
		   <div className="container-fluid no-breadcrumbs page-dashboard">
		  	<div className="box box-default">
			    <div className="row">
			    	<div className="col-xl-12 videosearch">
			    	 <VideoSearch />
			    	</div>
			    </div>
			  	<div className="row">
			  	  <div className="col-xl-8 timeline-video">
			      	<TimelineVideo video={this.state.video} description={this.state.video.description} time={this.state.video.time}/>
			      	<VideoCommentSection/>
			      	{
			      	this.state.commentlist.map(
		              (commentlist,index)=>{return <CommentList key={commentlist.id} comment={commentlist.comment} description={commentlist.description} time={commentlist.time} index={index}/>
		              })
					}
			      </div>
			      <div className="col-xl-4">
			      	<Toggle
				      label="Up Next"
				      defaultToggled={true}
				      style={styles.toggle}
				    />
			      	{
			      	this.state.videolist.map(
		              (videolist,index)=>{return <VideoList key={videolist.id} path={videolist.path} description={videolist.description} time={videolist.time} index={index}/>
		              })
					}
			      </div>
			    </div>
		    </div>
		  </div>
    );
  }
}

module.exports = VideoPlayback;
