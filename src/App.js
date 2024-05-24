import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;



// import React from 'react';

// const App = () => {
//   // Access the environment variable
//   const apiUrl = process.env.REACT_APP_API_URL;
//   console.log('API URL:', https://application-11.onrender.com);  // Debugging line

//   return (
//     <div>
//       <h1> API URL: {https://application-11.onrender.com} </h1>
//     </div>
//   );
// };

// export default App;
// import React from 'react';

// const App = () => {
//   // Access the environment variable
//   const apiUrl = process.env.REACT_APP_API_URL;
//   console.log('API URL:', apiUrl);  // Debugging line

//   return (
//     <div>
//       <h1> API URL: {apiUrl} </h1>

//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [data, setData] = useState(null);
//   const apiUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/endpoint`); // Adjust the endpoint as needed
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <header style={{ marginBottom: '20px' }}>
//         <h1>Welcome to Our Application</h1>
//       </header>
//       <main>
//         <section>
//           <h2>Fetched Data</h2>
//           {data ? (
//             <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
//               {JSON.stringify(data, null, 2)}
//             </pre>
//           ) : (
//             <p>Loading data...</p>
//           )}
//         </section>
//       </main>
//       <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
//         <p>&copy; 2024 Our Application. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;


