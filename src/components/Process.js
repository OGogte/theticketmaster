import DetailStepper from "./DetailStepper";
import {useState} from 'react';
import styles from "../styles/Process.module.css";
import {React} from 'react'
import Box from '@mui/material/Box';
import Navbar from "./Navbar";
import PassengerDetails from "./PassengerDetails";
import ReviewDetails from "./ReviewDetails";
import Payment from "./Payment";

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
                {activeStep === 0 && <PassengerDetails passengers={passengers} setPassengers={setPassengers} addPassenger={addPassenger}/> }
                {activeStep === 1 && <ReviewDetails passengers={passengers}/>}
                {activeStep === 2 && <Payment activeStep={activeStep} setActiveStep={setActiveStep} passengers={passengers}/>}
                {activeStep === 3 ? (
                    <div>Done</div>
                ) : (
                    <div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <button className={styles.butts} onClick={handleBack} disabled={activeStep === 0}>Back</button>
                        {activeStep < 2 && <><Box sx={{ flex: '1 1 auto' }} />
                        <button className={styles.butts} onClick={handleNext}>Next</button></>}
                        </Box>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Process;