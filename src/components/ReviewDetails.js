import styles from "../styles/Process.module.css";
import TextField from '@mui/material/TextField';

const ReviewDetails = (props) => {

    return(
        <div>
             <div className={styles.passTitle}>REVIEW DETAILS</div>
        {props.passengers.map((passenger,index) => {
            return (
                <div style={{marginLeft:"50px",marginTop:"25px",marginRight:"50px",}}>
                    <div style={{fontWeight:"600",fontSize:"20px",marginBottom:"5px"}}>Passenger {index + 1}</div>
                    <div className={styles.allTxt}>
                    <TextField value={passenger.first_name} InputProps={{readOnly: true,}} margin='dense' type='text' id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField InputProps={{readOnly: true,}} value={passenger.last_name} margin='dense' type='text' id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField InputProps={{readOnly: true,}} value={passenger.age} margin='dense' type='text' id="outlined-basic" label="Age" variant="outlined" />
                    <TextField InputProps={{readOnly: true,}} value={passenger.gender} margin='dense' type='text' id="outlined-basic" label="Gender" variant="outlined" />
                    </div>
                </div>
             );
                })}
                
            </div>
    );

}

export default ReviewDetails;