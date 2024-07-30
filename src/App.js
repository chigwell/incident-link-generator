import React, { useState } from "react";
import './App.css';

const BASE_URL = "https://uniofcam.saasiteu.com/Default.aspx?Scope=ObjectWorkspace&CommandId=Search&ObjectType=Incident%23&CommandData=IncidentNumber,%3D,0,";

function App() {
  const [incidentNum, setIncidentNum] = useState("");

  const handleInputChange = (event) => {
    if (event.target.value > 0) {
        setIncidentNum(event.target.value);
        document.querySelector(".copy-button").style.display = "block";
        document.querySelector("a").style.display = "block";
    }
    else {
        setIncidentNum("");
        document.querySelector(".copy-button").style.display = "none";
        document.querySelector("a").style.display = "none";
    }
  };

  const generateUrl = () => {
    return BASE_URL + incidentNum;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateUrl()).then(() => {
      alert("URL copied to clipboard!");
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Enter Incident Number"
          value={incidentNum}
          onChange={handleInputChange}
        />
        <a
          href={generateUrl()}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "20px", display: "none" }}
        >
          {generateUrl()}
        </a>
        <button
          className="copy-button"
          onClick={copyToClipboard}
          style={{ display: "none", marginTop: "10px" }}
        >
          Copy URL
        </button>
      </header>
    </div>
  );
}

export default App;
