const express = require('express');
const { spawn } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/TestAPI', (_req, res) => {
  res.send("THIS TEST IS WORKING")
});


app.post('/runPythonScript', (req, res) => {
  const genes = req.body.genes;

  // Run the Python script with genes as arguments
  const pythonProcess = spawn('python', ['/data/Visualization.py', ...genes]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python script output: ${data}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python script error: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python script process exited with code ${code}`);
    // You can send a response back to the client if needed
    res.sendStatus(200); // For example, send status code 200 indicating success
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});