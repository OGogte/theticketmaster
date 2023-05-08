import Navbar from "./Navbar";
import styles from '../styles/Home.module.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState,useEffect } from "react";
import marker from '../assets/location.png';
import seat from '../assets/seat.png';
import quota from '../assets/quota.png';
import { FormControl } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import landr from '../assets/landr.png';
import { useNavigate } from "react-router-dom";
import {book} from '../client/client';
import axios from 'axios';

const Home = (props) => {
    
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        let temp = {...props.formDetails};
        temp[e.target.name] = e.target.value;
        props.setFormDetails(temp);
        console.log(temp);
    }

    const handleDateChange = (date) => {
        let temp = {...props.formDetails};
        temp['date'] = date.toLocaleString();
        props.setFormDetails(temp);
      }

      const handleSearch =  (e) => {
        //e.preventDefault();
        // axios.post('https://railwaybooking.azurewebsites.net/reservation', {
        //     source: "abc",
        //     destination: "ghi",
        //     date_time: "2023-05-07T18:04:07.708Z"
        // })
        // .then(response => {
        //     console(response.data);
        // })
        // .catch(error => {
        //     console.error('Error submitting form:', error);
        // });
        //book("abc","ghi","2023-05-07T18:04:07.708Z");
        navigate("/stations");
    }

    return (
        <div>
            <Navbar selected="home"/>
            <div className={styles.invisDab}>
                <div className={styles.homeTitle}>BOOK YOUR NEXT TRAIN TICKET</div>
                <div className={styles.mainDabba}>
                    <div className={styles.sode}>
                        <div>
                            <img src={marker} style={{marginTop:"10px",marginRight:"20px"}} alt="source"></img>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Source</InputLabel>
                                <Select
                                style={{width:"258px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.formDetails.source}
                                label="Source"
                                name="source"
                                onChange={handleChange}
                                >
                                    <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                                    <MenuItem value={'Pune'}>Pune</MenuItem>
                                    <MenuItem value={'Satara'}>Satara</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <img style={{cursor:"pointer"}} src={landr} alt="destination"></img>
                        <div>
                            <img src={marker}  style={{marginTop:"10px",marginRight:"20px"}} alt="destination"></img>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                                <Select
                                style={{width:"258px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.formDetails.destination}
                                label="Destination"
                                name="destination"
                                onChange={handleChange}
                                >
                                    <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                                    <MenuItem value={'Pune'}>Pune</MenuItem>
                                    <MenuItem value={'Satara'}>Satara</MenuItem>
                                </Select>
                            </FormControl>
                        </div>  
                    </div>
                    <div style={{marginTop:"50px"}} className={styles.sode}>
                        <div>
                            <img src={seat} style={{marginTop:"10px",marginRight:"20px"}} alt="seat class"></img>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Seat Class</InputLabel>
                                <Select
                                style={{width:"258px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.formDetails.seatClass}
                                label="Seat Class"
                                name="seatClass"
                                onChange={handleChange}
                                >
                                    <MenuItem value={'AC'}>AC</MenuItem>
                                    <MenuItem value={'Sleeper'}>Sleeper</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <img src={quota} style={{marginTop:"10px",marginRight:"20px"}} alt="quota"></img>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Quota</InputLabel>
                                <Select
                                style={{width:"258px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.formDetails.quota}
                                label="Quota"
                                name="quota"
                                onChange={handleChange}
                                >
                                    <MenuItem value={'Ladies'}>Ladies</MenuItem>
                                    <MenuItem value={'General'}>General</MenuItem>
                                    <MenuItem value={'PWD'}>PWD</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={handleDateChange} label="Date"/>
                        </LocalizationProvider>
                        </div>    
                    </div>
                    <div>
                        <button onClick={handleSearch} className={styles.butts}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;