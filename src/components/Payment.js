import styles from "../styles/Process.module.css";
import {useState} from 'react';

const Payment = (props) => {
    const [paid,setPaid] = useState(false);

    const handlePay = (e) => {
        props.setActiveStep(props.activeStep + 1);
        setPaid(true);
    }

    return(
        <div>
            {!paid ? <><div className={styles.passTitle}>PAYMENT</div>
            <div style={{fontWeight:"600",fontSize: "20px",marginLeft:"25px",marginTop:"25px"}}>From: </div>
            <div style={{fontWeight:"600",fontSize: "20px",marginLeft:"25px",marginTop:"25px"}}>To: </div>
            <div style={{fontWeight:"600",fontSize: "20px",marginLeft:"25px",marginTop:"25px"}}>Passenger Count:  {props.passengers.length}</div>
            <button onClick={handlePay} style={{width:"30%",marginLeft: "35%"}} className={styles.butts}>Pay Now</button></> :
            
            <div>
                    
            </div>
            }
        </div>
    );
}

export default Payment;