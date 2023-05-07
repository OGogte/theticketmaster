import {useState} from 'react';
import styles from "../styles/Process.module.css";
import TextField from '@mui/material/TextField';
import plus from '../assets/plus.png';

const PassengerDetails = (props) => {

    const handleChange = (e) => {
        let temp = [...props.passengers];
        
        temp[e.target.id][e.target.name] = e.target.value;
        console.log(temp);
        props.setPassengers(temp);
    }
    
    return(
        <div>
             <div className={styles.passTitle}>PASSENGER DETAILS</div>
        {props.passengers.map((passenger,index) => {
            return (
                <div key={index} style={{marginLeft:"50px",marginTop:"25px",marginRight:"50px",}}>
                    <div style={{fontWeight:"600",fontSize:"20px",marginBottom:"5px"}}>Passenger {index + 1}</div>
                    <div className={styles.allTxt}>
                    <TextField id={index} value={passenger.first_name} name='first_name' key={index} onChange={handleChange} margin='dense' type='text' label="First Name" variant="outlined" />
                    <TextField id={index} value={passenger.last_name} name='last_name' key={index} onChange={handleChange} margin='dense' type='text' label="Last Name" variant="outlined" />
                    <TextField id={index} value={passenger.age} name='age' key={index} onChange={handleChange} margin='dense' type='text' label="Age" variant="outlined" />
                    <TextField id={index} value={passenger.gender} name='gender' key={index} onChange={handleChange} margin='dense' type='text' label="Gender" variant="outlined" />
                    </div>
                </div>
             );
                })}
                <div onClick={props.addPassenger} className={styles.addPass}><img style={{verticalAlign:"middle"}} src={plus} alt="add"/><span style={{verticalAlign:"middle"}}>ADD PASSENGER</span></div>
            </div>
    );

}

export default PassengerDetails;