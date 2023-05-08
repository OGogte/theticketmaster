import { useState,useRef,useEffect} from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from '../styles/YourBookings.module.css';
import Navbar from "./Navbar";

const YourBookings = (props) => {

    const[arrivalTime,setArrivalTime] = useState(new Date(`2023-05-08T16${props.formDetails.arrivaltime.substring(2,5)}:00`));
    const[departure,setDeparture] = useState(new Date(`2023-05-08T13${props.formDetails.departuretime.substring(2,5)}:00`));
    const [currentTime,setCurrentTime] = useState(new Date());
    const [status,setStatus] = useState();
    const [progress,setProgress] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
          setStatus(getStatus());
          setProgress(getProgress());
        }, 1000);
        return () => clearInterval(interval);
      });

    const getStatus = () => {
        let temp = getPureDiff(departure,currentTime);
        let str = "";
        if( temp >= 0)
        {
            str = 'In Journey';
        }
        else
        {
            if(temp < 0 && temp >= -60)
            str = 'Boarding';
            else
            str = 'On Time';
        }
        
        if(getPureDiff(arrivalTime,currentTime) > 0)
        {
            str = "Journey Over";
        }
        
        console.log(currentTime);
        return str;
    }

    const getProgress = () => {
        let temp1 = getTimeDifferenceInMinutes(arrivalTime,departure);
        let temp2 = getTimeDifferenceInMinutes(departure,currentTime);

        let formula = temp2/temp1 * 100;
        console.log(formula)
        return formula;

    }

    function getTimeDifferenceInMinutes(date1, date2) {
        const diffInMilliseconds = Math.abs(date2 - date1);
        const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      
        return diffInSeconds;
      }

      function getPureDiff(date1, date2) {
        const diffInMilliseconds = (date2 - date1);
      
        return diffInMilliseconds/1000;
      }

      function convertMinutes(minutes) {
        const days = Math.floor(minutes / 1440);
        const hours = Math.floor((minutes % 1440) / 60);
        const remainingMinutes = minutes % 60;
        const seconds = remainingMinutes * 60;
      
        return {
          days,
          hours,
          minutes: remainingMinutes,
          seconds
        };
      }

    return(
        <div>
            <Navbar selected="yourbookings"/>
            <div className={styles.maincomponent}>
            <div>
                <div>
                    Departure Date: {departure.toLocaleString().substring(0,8)}
                </div>
                <div>
                    Departure Time: {departure.toLocaleString().substring(10)}
                </div>
                <div>
                    Arrival Date: {arrivalTime.toLocaleString().substring(0,8)}
                </div>
                <div>
                    Arrival Time: {arrivalTime.toLocaleString().substring(10)}
                </div>
                <div>
                    Status: {status}
                </div>
                <div className={styles["progress-bar"]}>
                <ProgressBar completed={parseInt(progress) >= 100 ? 100 : parseInt(progress) <= 0 ? 0 : parseInt(progress) } bgColor= " #3626A7" animateOnRender={true} className={styles.progressbar}/>
            </div>
            </div>
            </div>
        </div>
    );
}

export default YourBookings;