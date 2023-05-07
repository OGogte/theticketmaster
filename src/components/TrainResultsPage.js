import React from 'react';
import styles from '../styles/TrainResultPage.module.css';
import TrainResult from './TrainResult';

function TrainResultsPage(props) {
  const { trains, from, to, date } = props;
  const train = [
    {
      id: 1,
      number: "1234",
      name: "Doronto Express",
      from: "Pune",
      to: "Mumbai",
      departureTime: "09:00 AM",
      departureDate: "05/08/2023",
      arrivalTime: "12:00 PM",
      arrivalDate: "05/08/2023",
      duration: "3 hours",
      price: "Rs 150",
    },
    {
      id: 2,
      number: "5678",
      name: "Doronto Express",
      from: "Pune",
      to: "Mumbai",
      departureTime: "01:00 PM",
      departureDate: "05/08/2023",
      arrivalTime: "04:00 PM",
      arrivalDate: "05/08/2023",
      duration: "3 hours",
      price: "Rs 160",
    },
    // add more trains here as needed
  ];
  
  return (
    <div className={styles.trainResultsPage}>
      <div className={styles.searchBar}>
        <div className={styles.searchLabel}>Modify search:</div>
        <div className={styles.searchDetails}>
          <div className={styles.searchDetail}>{from}</div>
          <div className={styles.searchDetail}>to</div>
          <div className={styles.searchDetail}>{to}</div>
          <div className={styles.searchDetail}>{date}</div>
        </div>
        <div className={styles.searchAction}>Change</div>
      </div>
      <div className={styles.trainList}>
        {train.map(train => (
          <TrainResult key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
}

export default TrainResultsPage;
