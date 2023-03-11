import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("called useEffect");
    const requestOptions = {
      headers: { Accept: 'text/plain' }
    };
    axios.get("http://localhost:5000/ntr2", requestOptions).then(async (response) => {
      document.getElementById('my-div').innerHTML = (response.data);
      await setData(response.data)
      // console.log(response);
      console.log(typeof (response.data));
    })
  }, [])

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
