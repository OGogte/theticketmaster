import { useState,useRef,useEffect} from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Navbar from "./Navbar";

const YourBookings = () => {

    const[arrivalTime,setArrivalTime] = useState();
    const[departure,setDeparture] = useState();
    const [currentTime,setCurrentTime] = useState(new Date());
    const [status,setStatus] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    const getStatus = () => {
        console.log(currentTime);
    }

    function getTimeDifferenceInMinutes(date1, date2) {
        const diffInMilliseconds = Math.abs(date2 - date1);
        const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
      
        return diffInMinutes;
      }

      function convertMinutesToDHMS(minutes) {
        const days = Math.floor(minutes / 1440);
        const hours = Math.floor((minutes % 1440) / 60);
        const remainingMinutes = minutes % 60;
        const remainingSeconds = remainingMinutes * 60;
      
        return {
          days,
          hours,
          remainingMinutes,
          remainingSeconds
        };
      }

      const date1 = new Date("2023-05-09T12:00:00");
        const date2 = new Date();
      const minutes = getTimeDifferenceInMinutes(date1, date2);
      const { days, hours, remainingMinutes, remainingSeconds } = convertMinutesToDHMS(minutes);

    return(
        <div>
            <Navbar selected="yourbookings"/>
            <div>
                Departure Time: {arrivalTime}
                {days}D {hours}H {remainingMinutes}M {remainingSeconds}S
            </div>
            <div>
                Current Time: {currentTime.toLocaleString()}
            </div>
            <div>
                Status: 
            </div>
            <ProgressBar completed={50} bgColor="grey" animateOnRender={true} />
            <button onClick={getStatus}>get</button>
        </div>
    );
}

export default YourBookings;