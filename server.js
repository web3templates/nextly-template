const express = require('express');
const { spawn } = require('child_process');
const app = express();
app.use(express.json());
var apiRouter = express.Router();
app.use(express.static('public'));
app.use(`/api`, apiRouter);

// Define a route to handle the GET request from the frontend
apiRouter.get('/run-python-script', async (req, res) => {
  console.log("THis is working in here")
  // Replace 'script.py' with the path to your Python script
  const pythonScriptPath = '../components/testingPy.py';

  // Spawn a new process to run the Python script
  const pythonProcess = spawn('python', [pythonScriptPath]);

  // Listen for data from the Python process
  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python script output: ${data}`);
    res.send(data)
  });

  // Listen for errors from the Python process
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python script errors: ${data}`);
  });

  // Listen for the Python process to exit
  pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
    res.send(`Python process exited with code ${code}`);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});