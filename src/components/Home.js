import Navbar from "./Navbar";
import styles from '../styles/Home.module.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import marker from '../assets/location.png';
import { FormControl } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import landr from '../assets/landr.png';

const Home = () => {
    
    const [formDetails,setFormDetails] = useState({
        source : '',
        destination: '',
        seatClass: '',
        quota: '',
        date: ''
    });
    
    const handleChange = (e) => {
        let temp = {...formDetails};
        temp[e.target.name] = e.target.value;
        setFormDetails(temp);
    }

    return (
        <div>
            <Navbar />
            <div className={styles.invisDab}>
                <div className={styles.homeTitle}>BOOK YOUR NEXT TRAIN TICKET</div>
                <div className={styles.mainDabba}>
                    <div className={styles.sode}>
                        <div>
                            <img src={marker} alt="source"></img>
                            <FormControl fullwidth>
                                <InputLabel id="demo-simple-select-label">Source</InputLabel>
                                <Select
                                style={{width:"300px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formDetails.source}
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
                        <img src={landr} alt="destination"></img>
                        <div>
                            <img src={marker} alt="destination"></img>
                            <FormControl fullwidth>
                                <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                                <Select
                                style={{width:"300px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formDetails.destination}
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
                    <div className={styles.sode}>
                        <div>
                            <img src={marker} alt="seat class"></img>
                            <FormControl fullwidth>
                                <InputLabel id="demo-simple-select-label">Seat Class</InputLabel>
                                <Select
                                style={{width:"300px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formDetails.seatClass}
                                label="Seat Class"
                                name="seatClass"
                                onChange={handleChange}
                                >
                                    <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                                    <MenuItem value={'Pune'}>Pune</MenuItem>
                                    <MenuItem value={'Satara'}>Satara</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <img src={marker} alt="quota"></img>
                            <FormControl fullwidth>
                                <InputLabel id="demo-simple-select-label">Quota</InputLabel>
                                <Select
                                style={{width:"300px"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formDetails.quota}
                                label="Quota"
                                name="quota"
                                onChange={handleChange}
                                >
                                    <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                                    <MenuItem value={'Pune'}>Pune</MenuItem>
                                    <MenuItem value={'Satara'}>Satara</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                        </LocalizationProvider>
                        </div>    
                    </div>
                    <div>
                        <button className={styles.butts}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;