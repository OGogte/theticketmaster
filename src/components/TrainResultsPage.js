import React from 'react';
import styles from '../styles/TrainResultPage.module.css';
import TrainResult from './TrainResult';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function TrainResultsPage(props) {
  const { trains, from, to, date } = props;
  const navigate = useNavigate();
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
      <Navbar selected="stations"/>
      <div className={styles.searchBar}>
      <div className={styles.allTxt}>
          <TextField style={{marginRight:"20px",marginLeft:"20px"}} value={"Pune"} InputProps={{readOnly: true,}} margin='dense' type='text' id="outlined-basic" label="Source" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={"Pune"} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Destination" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={"Pune"} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Seat Class" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={"Pune"} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Quota" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={"Pune"} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Date" variant="outlined" />
        </div>           
        <div style={{fontFamily: "Poppins"}} onClick={()=>navigate("/home")} className={styles.butts}>Modify Search</div>
      </div>
      <div className={styles.outerContainer}>
      <div className={styles.trainList}>
        {train.map(train => (
          <TrainResult key={train.id} train={train} />
        ))}
      </div>
      <button onClick={()=> navigate("/details")}>Book</button>
      </div>
    </div>
  );
}

export default TrainResultsPage;
