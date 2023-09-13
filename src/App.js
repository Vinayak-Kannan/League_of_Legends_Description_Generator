import './App.css';
import axios from "axios";
import {useEffect} from "react";

const getData = async () => {
  const response = await axios.get('http://localhost:8000/ping')
  console.log(response)
}


function App() {

  useEffect(() => {
    void getData()
  }, [])

  return (
    <div>
      Hello
    </div>
  );
}

export default App;
