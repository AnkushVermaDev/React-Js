import React, { useEffect, useState } from 'react';
import styles from '../css/DataFetch.module.css'
const DataFetching = ({ prop }) => {
  const [rawdata, setRawdata] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AnkushVermaDev/FoodSiteApi/refs/heads/main/DoctorAppointment.json')
      .then((res) => res.json())
      .then((result) => setRawdata(result.doctors));
  }, []);



  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let Today = weekday[d.getDay()];


  // Filter the data first
  const filteredDoctors = rawdata.filter(
    (item) =>
      item.specialist_in.toLowerCase().includes(prop.disease.toLowerCase()) &&
      item.experience_years >= prop.experience && item.appointment_day.split(',').map(day => day.trim()).includes(Today)

  );

  return (
    <div>
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map((item) => (
          <div className={styles.container} key={item.name}>
            <img src={item.pic_url} alt="" />
            <h3>{item.name}</h3>
            <h4>Experience: {item.experience_years} years</h4>
            <h3>Days: {item.appointment_day}</h3>
            <h3>Speciality: {item.specialist_in}</h3>

            <h3>Time: {item.appointment_time}</h3>
          </div>
        ))
      ) : (
        <h1>No Doctor Available Today</h1>
      )}
    </div>
  );
};

export default DataFetching;
