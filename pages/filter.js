import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Image from "next/image";
import TempImg from "../public/img/altair_chart.png"

import { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

export default function Filter() {
  const [genesInput, setGenesInput] = useState('');



  
  const handleFormSubmit = async (event) => {
   
    event.preventDefault();
    try {
    const genes = genesInput.split(',').map(gene => gene.trim());
    const { spawn } = require('child_process');
    const pythonScript = spawn('python', ["Visualization.py", ...genes]);
    } catch (error) {
      const container = document.getElementById("Test");
      container.innerHTML = `${error}`;
    }
    
  //   try {
  //     // Make a POST request to the backend to run the Python script
  //     const response = await fetch('runPythonScript', {
  //       method: 'POST',
  //       headers: { 'content-type': 'application/json' },
  //       body: JSON.stringify(genes),
  //     });
  //     console.log('Python script executed successfully!');
  //   } catch (error) {
  //     const container = document.getElementById("Test");
  //     container.innerHTML = `${error}`;
  //     console.error('Error executing Python script:', error);
  //   }
  // };
  // const handleInputChange = (event) => {
  //   setGenesInput(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Gene Filter</title>
      </Head>
      <Navbar />
      <div>
        <h1>Gene Filter</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="geneInput">Enter genes (comma-separated):</label>
          <input
            type="text"
            id="geneInput"
            name="genes"
            placeholder="Enter genes"
            value={genesInput}
            // onChange={handleInputChange}
          />
          <button type="submit">Run Python Script</button>
        </form>
      <container id="Test"></container>
      </div>
      {/* <Image src={TempImg} /> */}
      <iframe src= "/altair_chart.html" width="600" height="400" frameborder="0"></iframe>
    </>
  );
}
