import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import styles from "../styles/TrainSchedule.module.css";

const TrainSchedule = () => {
  // Initialize the state with a list of trains and their arrival times
  const [trains, setTrains] = useState([
    { id: 1, name: "Train 1", stations: ["Satara", "Pune", "Mumbai", "Surat"], arrivalTimes: ["10:00", "12:00", "14:00", "18:00"] },
    { id: 2, name: "Train 2", stations: ["Mumbai", "Pune", "Satara"], arrivalTimes: ["13:00", "14:00", "15:00"] },
    { id: 3, name: "Train 3", stations: ["Pune", "Mumbai", "Surat"], arrivalTimes: ["16:00", "17:00", "18:00"] }
  ]);

  // Initialize the state with an empty object for the selected train
  const [selectedTrain, setSelectedTrain] = useState({});

  // Update the arrival time of the selected train
  const updateArrivalTime = (e) => {
    const updatedTrain = { ...selectedTrain };
    updatedTrain.arrivalTimes[e.target.name] = e.target.value;
    setSelectedTrain(updatedTrain);
  };

  // Save the updated arrival times and update the state
  const saveArrivalTimes = () => {
    const updatedTrains = trains.map(train => train.id === selectedTrain.id ? selectedTrain : train);
    setTrains(updatedTrains);
    setSelectedTrain({});
  };

  // Render the table of trains and their arrival times
  return (
    <Table className={styles.trainSchedule} striped bordered hover>
      <thead>
        <tr>
        <th>Edit Time?</th>
          <th>Train Name</th>
          {selectedTrain.stations && selectedTrain.stations.map(station => (
            <th key={station}>{station}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {trains.map(train => (
          <tr key={train.id}>
          <td className={styles.editButtonCell}>
          {selectedTrain.id === train.id ? (
            <Button variant="success" onClick={saveArrivalTimes} className={styles.saveButton}>Save</Button>
          ) : (
            <Button onClick={() => setSelectedTrain(train)} className={styles.editButton}>Edit</Button>
          )}
        </td>
            <td>{train.name}</td>
            {train.arrivalTimes.map((arrivalTime, index) => (
              <td key={index}>
                {selectedTrain.id === train.id && selectedTrain.stations.includes(train.stations[index]) ? (
                  <Form.Control type="text" name={index} value={arrivalTime} onChange={updateArrivalTime} className={styles.arrivalTimeInput} />
                ) : (
                  <span>{arrivalTime}</span>
                )}
              </td>
            ))}

          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TrainSchedule;
