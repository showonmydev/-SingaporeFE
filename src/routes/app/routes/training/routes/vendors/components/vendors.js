import React from 'react';
import Master from '../../Master/Master.js';

export default class Vendors extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      value: props.route.path,
      latest: {id:"1",path: "https://cleanpower.pro/images/videos/explore.mp4",description:"MILO Confront the panel | Overtime with Bill Maher",time:"6.4M view . 6 months ago",name:"Video"}
		}
  }
  
  render(){
    return(
     <div>
     	<Master TabOpen={this.state.value} latest1={this.state.latest}/>
     </div>
    );
  }
}