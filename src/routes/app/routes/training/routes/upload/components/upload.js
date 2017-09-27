import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Upload from 'material-ui-upload/Upload';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';
import 'styles/custom/training/upload.css';


class Main extends React.Component {
	
    onFileLoad = (e, file) => console.log(e.target.result, file.name);
    
   render(){
			   return(
			   <div className="box box-default file-upload-box">
			   <div className="box-body center">
			   <div className="row">
				   <div className="col-xl-12">
					   <div className="upload">
						   <i className="material-icons upload_icon">
						   		 cloud_upload
						   	</i>
						  	<div className="upload-file-label"><Basic className="upload" className="upload"/></div>
					   </div>
				       <p className="select-file">Select File to Upload</p>
				       <p className="or-drag">Or drag and drop Video Files</p>
				   </div>
									
				   <div className="col-xl-12">
					   <select className="select-option">
					   <option value="Packs">Packs</option>
					   <option value="Singles">Singles</option>
					   <option value="Pros">Pros</option>
					   <option value="Vendors">Vendors</option>
					   <option value="Custom">Custom</option>
					   </select>
				   </div>
			   </div>
			   </div>
			   </div>
			)
   		  }
   }
   
class Basic extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
          </Dropzone>
        </div>
        <aside className="UploadFileName">
          <ul>
            {
              this.state.files.map(f => <li key={f.name}><span>{f.name}</span></li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}


onDrop: acceptedFiles => {
    acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            const fileAsBinaryString = reader.result;
        };
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
 
        reader.readAsBinaryString(file);
    });
}

const Upload_search= () => (
	<div className="box box-default">
		<div className="box-body">
		<div className="col-xl-12">
		<TextField
          id="text-field-controlled"
          value=""
          hintText="Search Video"
          className="search"
        />
        <i className="material-icons">search</i>
		</div>
		</div>
	</div>
)

const Upload_Help_Suggestions= () => (
	<div className="box box-default">
		<div className="box-body">
		<div className="col-xl-12">
		<p>HELP AND SUGGESTIONS</p>
		<p>Want to upload videos longer than 15 minutes? Increase your Limit
By submitting your videos to YouTube, you acknowledge that you agree to YouTube Terms<br/>

<a href="#">Upload Instructions</a> | <a href="#">Troubleshooting</a> | <a href="#">Mobile uploads</a></p>
		</div>
		</div>
	</div>
)	
		
const Upload_menu_box= () => (
	<div>
	<div className="box box-default left-section-block">
		<div className="box-body">
		<div className="col-xl-12">
		<p>IMPORT VIDEO</p>
		<div className="left-section">
		<img src="https://lh5.ggpht.com/tq3WqEUxtRyBn-d_0t3j6WKNHuJDrmLq-FE3GAYrsAMQFIaS7FIgRLfzzql2SvfvLqto=w300" height="50px" width="50px"/>
		</div>
		<div className="right-section">
		<p>Import your videos from Google Photos </p>
		<button type="button">Import</button>
		</div>
		</div>
		</div>
	</div>
	
	<div className="box box-default left-section-block">
		<div className="box-body">
		<div className="col-xl-12">
		<p>LIVE STREAMING</p>
		<div className="left-section">
		<img src="https://yt3.ggpht.com/BQSIiLDxZiZpzR4C6pK-NKkKOv3fsPsWuKVJxpmYCnEASI8W5pglXP1vF30D98doHzsP_JwPLycrfd-FFnw=s900-nd-c-c0xffffffff-rj-k-no" height="50px" width="50px"/>
		</div>
		<div className="right-section">
		<p>Setup your channel and stream live on your fans </p>
		<button type="button">Get started</button>
		</div>
		</div>
		</div>
	</div>
	</div>
)		

const Upload_video = () => (
  <div className="container-fluid no-breadcrumbs page-dashboard">
    <div className="row">
    	<div className="col-xl-12">
    	 <Upload_search />
    	</div>
    </div>
  	<div className="row">
  	  <div className="col-xl-8">
      	<Main />
      </div>
      <div className="col-xl-4">
      	<Upload_menu_box />
      </div>
    </div>
    
    <div className="row">
      <div className="col-xl-12">
         <Upload_Help_Suggestions />
      </div>
    </div>
    
    <div className="row">
    	
    </div>
  </div>
);

module.exports = Upload_video;
