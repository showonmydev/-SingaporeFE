import React from 'react';
import {
    Step,
    Stepper,
    StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * Non-linear steppers allow users to enter a multi-step flow at any point.
 *
 * This example is similiar to the regular horizontal stepper, except steps are no longer
 * automatically set to `disabled={true}` based on the `activeStep` prop.
 *
 * We've used the `<StepButton>` here to demonstrate clickable step labels.
 */
class HorizontalNonLinearStepper extends React.Component {

  state = {
    stepIndex: 0,
  };

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <article className="article">
        <h2 className="article-title">Horizontal non-linear stepper</h2>
        <div className="box box-default">
          <div className="box-body padding-xl">

            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
              <Stepper linear={false} activeStep={stepIndex}>
                <Step>
                  <StepButton onClick={() => this.setState({stepIndex: 0})}>
                    Select campaign settings
                  </StepButton>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({stepIndex: 1})}>
                    Create an ad group
                  </StepButton>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({stepIndex: 2})}>
                    Create an ad
                  </StepButton>
                </Step>
              </Stepper>
              <div style={contentStyle}>
                <p>{this.getStepContent(stepIndex)}</p>
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label="Next"
                    disabled={stepIndex === 2}
                    primary
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>

              <div className="divider divider-xl" />
              <div className="callout callout-info">
                <p>Non-linear steppers allow users to enter a multi-step flow at any point.</p>
              </div>
            </div>

          </div>
        </div>
      </article>
    );
  }
}

export default HorizontalNonLinearStepper;
