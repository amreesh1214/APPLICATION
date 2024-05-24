const API_URL = process.env.https:application-11.onrender.com;

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/endpoint`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
