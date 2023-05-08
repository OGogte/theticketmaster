import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../styles/Analytics.module.css';
function Analytics() {
  const [dailyReports, setDailyReports] = useState(null);

  useEffect(() => {
    // Uncomment this code when API is ready
    // fetch('http://railwaybooking.azurewebsites.net/admin/report/')
    //   .then(response => response.json())
    //   .then(data => setDailyReports(data))
    //   .catch(error => console.log(error));

    // For now, use this example dictionary
    setDailyReports({
      'delayed_trains': 1,
      'total_trains': 3,
      'yesterday': 8,
      'today': 11,
      'tommorow': 5,
      'tracking_requests': 0
    });
  }, []);

  if (!dailyReports) {
    return <div>Loading...</div>;
  }

  const delayedTrainsData = [
    { name: 'Delayed Trains', value: dailyReports.delayed_trains },
    { name: 'On Time Trains', value: dailyReports.total_trains - dailyReports.delayed_trains }
  ];

  const ticketBookingData = [
    { name: 'Yesterday', tickets: dailyReports.yesterday },
    { name: 'Today', tickets: dailyReports.today },
    { name: 'Tomorrow', tickets: dailyReports.tommorow }
  ];

  const trackingRequestsCount = dailyReports.tracking_requests;

  return (
    <div className={styles.flexing}>
    <div className={styles.paddings}>  
    <h2>Analytics</h2>
    </div>  
    <div className={styles.paddings}>
        <h3>Delayed Trains</h3>
        <PieChart width={400} height={400}>
          <Pie data={delayedTrainsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            <Cell fill="#f00" />
            <Cell fill="#8884d8" />
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className={styles.paddings}>
        <h3>Ticket Bookings</h3>
        <BarChart width={600} height={400} data={ticketBookingData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tickets" fill="#8884d8" />
        </BarChart>
      </div>
      <div className={styles.paddings}>
        <h3>Train Tracking Requests</h3>
        <p>{trackingRequestsCount}</p>
      </div>
    </div>
  );
}

export default Analytics;
