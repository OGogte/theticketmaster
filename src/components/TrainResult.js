import React from 'react';
import styles from '../styles/TrainResult.module.css'
import { useNavigate } from 'react-router-dom';
function TrainResult(props) {
  const train = props.train;
  const navigate = useNavigate();

  const handleBook = ()=> {
    navigate("/details");
    let temp = {...props.formDetails};
    temp.arrivaltime = props.train.arrivalTime;
    temp.departuretime = props.train.departureTime;
    props.setFormDetails(temp);
    console.log(temp);
    
  }

  
  return (
    <div className={styles.mainComponent}>
      <div className={styles.trainResult}>
      <div className={styles.trainNumber}>{train.name}</div><br />
        <div className={styles.trainNumber}>{train.number}</div>
        <div className={styles.trainDeparture}>
        <div className={styles.trainStation}>{train.from}</div>
          <div className={styles.trainTime}>{train.departureTime}</div>
          
        </div>
        <div className={styles.trainDuration}>{train.duration}</div>
      <div className={styles.trainArrival}>
      <div className={styles.trainStation}>{train.to}</div>  
      <div className={styles.trainTime}>{train.arrivalTime}</div>
        
      </div>

      <div className={styles.trainPrice}>{train.price}</div>
    </div>
    <div className={styles.trainButtons}>
      <button className={styles.trainButton}>First Class</button>
      <button className={styles.trainButton}>Second Class</button>
      <button className={styles.trainButton}>Refresh</button>
    </div>
    <div className={styles.trainSeatsAvailable}>
    <span>Seats Available:12</span> {train.seatsAvailable}
  </div>
  <div><button onClick={handleBook} className={styles.trainButton}>Book</button></div>
    </div>
  );
}

export default TrainResult;
