// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export const useScheduleData = () => {
//   const [schedules, setSchedules] = useState([1]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('your_schedule_data_endpoint')
//       .then((response) => {
//         setSchedules(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching schedule data:", error);
//         setLoading(false);
//       });
//   }, []);

//   return { schedules, 
//     setSchedules, 
//     loading };
// };
