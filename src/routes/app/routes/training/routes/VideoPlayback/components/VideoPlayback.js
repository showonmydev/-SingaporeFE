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
		    
		    <div className="ThumpsUp">
       		<span>{this.props.like}</span> <a href="#" onClick={(event)=>{event.preventDefault(); this.props.clickHandlerlike(this.props.index,"like","timeline");}}>
       		<i className="material-icons">thumb_up</i> </a>
       		</div>
       		
       		
       		<div className="ThumpsDown">
       		<span>{this.props.unlike}</span> <a href="#" onClick={(event)=>{event.preventDefault(); this.props.clickHandlerlike(this.props.index,"unlike","timeline");}}>
       		<i className="material-icons">thumb_down</i> </a>
       		</div>
       		 </span>
		    <p className="timeline-video-comment">{this.props.comment}</p>
		    <div className="timeline-video-reply">
		    <p>{this.props.time}</p>
		    <a href="#">
		    Reply
		    </a>
		    </div>
		   
		</div>
);}
};

class VideoCommentSection extends React.Component {
	render() {
    return (
		<div className="col-xl-12 put-user-comment">
		    <TextField hintText="Enter Here your comment" fullWidth={true} value={this.props.comment}/>
		    
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
       		
       		
       		<div className="ThumpsUp">
       		<span>{this.props.like}</span> 
       		<a href="#" onClick={(event)=>{event.preventDefault(); this.props.clickHandlerlike(this.props.index,"like","comment");}}>
       		<i className="material-icons">thumb_up</i></a>
       		</div>
       		
       		<div className="ThumpsDown">
       		<span>{this.props.unlike}</span>
	       		 <a href="#" onClick={(event)=>{event.preventDefault(); this.props.clickHandlerlike(this.props.index,"unlike","comment");}}>
	       		<i className="material-icons">thumb_down</i></a>
	       		
       		</div>
       		</span>
      </div>
      );}
};

class VideoPlayback extends React.Component {
  constructor() {
    super()
    this.state = {
    	comment:"",
    	video : {id:"0",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video Final",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
    	videolist: [{id:"1",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video1",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
              {id:"2",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video2",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
              {id:"3",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video3",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
              {id:"4",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video4",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
              {id:"5",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video5",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
              {id:"6",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video6",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
              {id:"7",path:"https://cleanpower.pro/images/videos/explore.mp4",description:"This is test video7",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},],
      commentlist: [{id:"1",comment:"You are great rob",description:"This is test video8",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
      {id:"2",comment:"You are great rob",description:"This is test video9",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
      {id:"3",comment: "You are great rob",description:"This is test video10",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},
      {id:"4",comment: "You are great rob",description:"This is test video11",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"},]
    	}
    	
    	this.changeStatus=this.changeStatus.bind(this);
    	this.likecount=this.likecount.bind(this);
    	this.PostComment=this.PostComment.bind(this);
  }
	
   //this is for count lik		
   likecount(index,type,position){
   		if(position=="timeline")
   		{
	   		if(type=="like")
	   		{
			var commentlist=this.state.commentlist;
			var count=commentlist[index];
			commentlist[index].like = parseInt(count.like)+1;
			this.setState({
				commentlist:commentlist
					})
			}
			else
			{
			var commentlist=this.state.commentlist;
			var count=commentlist[index];
			commentlist[index].unlike = parseInt(count.unlike)+1;
			this.setState({
				commentlist:commentlist
					})
			}
		}
		else
		{
			if(type=="like")
	   		{
			var commentlist=this.state.video;
			var count=commentlist;
			commentlist.like = parseInt(count.like)+1;
			this.setState({
				video:commentlist
					})
			}
			else
			{
			var commentlist=this.state.video;
			var count=commentlist;
			commentlist.unlike = parseInt(count.unlike)+1;
			this.setState({
				video:commentlist
					})
			}
		}
			
	}
   
   
   PostComment(value){
   	var comment_value=this.state.comment;
   	console.log(value);
   	var commentlist=this.state.commentlist;
   	var add={id:"10",comment: comment_value,description:"This is test video",time:"5M views - 6 Months ago",name:"Video",like:"1",unlike:"1"};
   	commentlist.push(add)
   	console.log(commentlist)
   	//this.setState({commentlist: commentlist})
   }
   
   
   changeStatus(index){
		var videolist=this.state.videolist;
		var TimlineVideo=videolist[index];
		//console.log(this.state.video);
		//console.log(TimlineVideo);
		this.setState({
			video:TimlineVideo
		})
		//console.log(this.state.video);
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
			      	<TimelineVideo video={this.state.video} like={this.state.video.like} unlike={this.state.video.unlike} description={this.state.video.description} time={this.state.video.time} clickHandlerlike={this.likecount}/>
			      	<VideoCommentSection comment={this.state.comment} clickHandlerPostComment={this.PostComment}/>
			      	{
			      	this.state.commentlist.map(
		              (commentlist,index)=>{return <CommentList key={commentlist.id} comment={commentlist.comment} description={commentlist.description} like={commentlist.like} unlike={commentlist.unlike} time={commentlist.time} clickHandlerlike={this.likecount} index={index}/>
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
		              (videolist,index)=>{return <VideoList clickHandler={this.changeStatus} key={videolist.id} path={videolist.path} description={videolist.description} time={videolist.time} index={index}/>
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
