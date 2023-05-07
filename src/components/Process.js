import DetailStepper from "./DetailStepper";
import {useState} from 'react';
import styles from "../styles/Process.module.css";
import {React} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Navbar from "./Navbar";
import plus from '../assets/plus.png';

const Process = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [passengers,setPassengers] = useState([
        {
            first_name: '',
            last_name: '',
            age: '',
            gender: '',
        }
    ]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const addPassenger = () => {
        let pass = {}
        let temp = [...passengers,pass];
        console.log(temp);
        setPassengers(temp); 
      }

    return(
        <div>
            <Navbar selected="stations"/>
            <DetailStepper activeStep={activeStep} setActiveStep={setActiveStep}/>
            <div className={styles.bigBox}>
                <div className={styles.passTitle}>PASSENGER DETAILS</div>
                {passengers.map((passenger,index) => {
                        return (
                            <div style={{marginLeft:"50px",marginTop:"25px",marginRight:"50px",}}>
                                <div style={{fontWeight:"600",fontSize:"20px",marginBottom:"5px"}}>Passenger {index + 1}</div>
                                <div className={styles.allTxt}>
                                <TextField margin='dense' type='text' id="outlined-basic" label="First Name" variant="outlined" />
                                <TextField margin='dense' type='text' id="outlined-basic" label="Last Name" variant="outlined" />
                                <TextField margin='dense' type='text' id="outlined-basic" label="Age" variant="outlined" />
                                <TextField margin='dense' type='text' id="outlined-basic" label="Gender" variant="outlined" />
                                </div>
                            </div>
                        );
                })}
                <div onClick={addPassenger} className={styles.addPass}><img style={{verticalAlign:"middle"}} src={plus} alt="add"/><span style={{verticalAlign:"middle"}}>ADD PASSENGER</span></div>
                {activeStep === 3 ? (
                    <div>Done</div>
                ) : (
                    <div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <button className={styles.butts} onClick={handleBack} disabled={activeStep === 0}>Back</button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <button className={styles.butts} onClick={handleNext}>{activeStep === 2 ? 'Finish' : 'Next'}</button>
                        </Box>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Process;