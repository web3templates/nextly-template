import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Image from "next/image";
import TempImg from "../public/img/altair_chart.png"
import { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import * as d3 from "d3"
// import TSV from "tsv-loader?module!../data/proportions/GCF_000001405.40"
export default function Filter() {



const fetchData = async () => {
  const { spawn } = require('child_process');

  const pythonScript = spawn('python', ['my_python_script.py']);
  
  pythonScript.stdout.on('data', (data) => {
    console.log(data.toString());
})

  return (
    <>
      <Head>
        <title>Gene Filter</title>
      </Head>
      <Navbar />
      <div>
        <h1>Gene Filter</h1>
        
          <button type="submit">Run Python Script</button>
          <button type="button" onClick={fetchData}>Load Data</button>
      <container id="Test"></container>
      </div>
      {/* <Image src={TempImg} /> */}
      <iframe src= "/altair_chart.html" width="600" height="400" frameborder="0"></iframe>
    </>
  );
}
}

