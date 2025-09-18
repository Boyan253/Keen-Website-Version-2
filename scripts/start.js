const { spawn } = require('child_process');
const path = require('path');

const start = spawn('npm', ['start'], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
  shell: true
});

start.on('error', (err) => {
  console.error('Failed to start development server:', err);
});

start.on('close', (code) => {
  console.log(`Development server exited with code ${code}`);
});
