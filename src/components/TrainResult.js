import React from 'react';
import styles from '../styles/TrainResult.module.css'

function TrainResult(props) {
  const train = props.train;

  return (
    <div className={styles.mainComponent}>
      <div className={styles.trainResult}>
        <div className={styles.trainNumber}>{train.number}</div>
        <div className={styles.trainNumber}>{train.name}</div>
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
      <button className={styles.trainButtonn}>Refresh</button>
    </div>
    <div className={styles.trainSeatsAvailable}>
    <span>Seats Available:12</span> {train.seatsAvailable}
  </div>
    </div>
  );
}

export default TrainResult;
