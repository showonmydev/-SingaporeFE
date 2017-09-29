import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export class Helper extends React.Component
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

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export class QuestionAnswer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      question: [{id:"1",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"2",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"3",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"4",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"5",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"6",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"7",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"8",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"9",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},
      {id:"10",que: "What is EQ?",option1:"A home stereo component1",option2:"A home stereo component2",option3:"A home stereo component3",option4:"A home stereo component4",correct:"A home stereo component1"},],
  	finished: false,
    stepIndex: 0,
    resultshow: 0,
	}}
  
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= this.state.question.length-1,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
  	//const {question.id} = this.state;
  	if(stepIndex)
  	{
		return(
		<div>
		Question {this.state.question[stepIndex].id}. {this.state.question[stepIndex].que}
		<br/> <br/>
			<RadioButtonGroup name={this.state.question[stepIndex].id} defaultSelected="not_light">
			<RadioButton
	        value={this.state.question[stepIndex].option1}
	        label={this.state.question[stepIndex].option1}
	        style={styles.radioButton}
	        />
	        <RadioButton
	        value={this.state.question[stepIndex].option2}
	        label={this.state.question[stepIndex].option2}
	        style={styles.radioButton}
	        />
	        <RadioButton
	        value={this.state.question[stepIndex].option3}
	        label={this.state.question[stepIndex].option3}
	        style={styles.radioButton}
	        />
	        <RadioButton
	        value={this.state.question[stepIndex].option4}
	        label={this.state.question[stepIndex].option4}
	        style={styles.radioButton}
	        />
	         </RadioButtonGroup>
		</div>
		)
	}
	return (
		<div>
		Question {this.state.question[0].id}. {this.state.question[0].que}
		<br/> <br/>
			<RadioButtonGroup name={this.state.question[0].id} defaultSelected="not_light">
			<RadioButton
	        value={this.state.question[0].option1}
	        label={this.state.question[0].option1}
	        style={styles.radioButton}
	        />
	        <RadioButton
	        value={this.state.question[0].option2}
	        label={this.state.question[0].option2}
	        style={styles.radioButton}
	        />
	        <RadioButton
	        value={this.state.question[0].option3}
	        label={this.state.question[0].option3}
	        style={styles.radioButton}
	        />
	        <RadioButton
	        value={this.state.question[0].option4}
	        label={this.state.question[0].option4}
	        style={styles.radioButton}
	        />
	         </RadioButtonGroup>
		</div>
	)
    
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 900, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          	  {this.state.question.map((item, index) => (
          	   <Step key={index}>
          	   <StepLabel>{this.state.question.id}</StepLabel>
          	   </Step>
		    ))}
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
          <div>
          	{this.state.question.map((item, index) => (
		          	   <div key={index}>
		          	   <p><b>Question : What is EQ{this.state.question.que}</b></p>
		          	   <p>Correct Answer : A home stereo component1{this.state.question.correct}</p>
		          	   </div>
			  ))}
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the exam.
            </p>
            </div>
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 9 ? 'Finish and Display Result' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}




