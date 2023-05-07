import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepConnector } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fontWeight } from '@mui/system';

const DetailStepper = (props) => {

  const steps = ['Passenger Details', 'Review Details', 'Payment'];

  return (
    <Box sx={{ width: '80%', marginLeft:"10%",marginTop:"50px" }}>
      <Stepper alternativeLabel activeStep={props.activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label} sx={{
              '& .MuiStepConnector-root ': {
                border:"3px solid grey",
              },
              '& .MuiStepConnector-root.Mui-completed.MuiStepConnector-alternativeLabel':
                {
                  borderColor:"#4532C8"
                },
              '& .MuiStepConnector-root.Mui-active.MuiStepConnector-alternativeLabel':
                {
                  borderColor:"#4532C8"
                },
              '& .MuiStepLabel-label': {
                color: 'black',
                fontSize:"20px",
                fontFamily: "Malt",
                fontWeight:"600"
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: 'green', 
                  fontWeight:"600"
                },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: '#4532C8',
                  fontWeight:"600"
                },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white',
              },
              }}>
              <StepLabel sx={{
                '& 	.MuiStepLabel-root 	.Mui-completed 	.Mui-active':{
                  color:"white"
                }
              }} style={{fontSize:"50px"}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export default DetailStepper;