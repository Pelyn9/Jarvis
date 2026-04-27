const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const { spawn } = require('child_process');

function checkOllama() {
  return new Promise((resolve) => {
    const ollama = spawn('ollama', ['list'], { shell: true });
    let output = '';
    ollama.stdout.on('data', (data) => { output += data.toString(); });
    ollama.on('close', (code) => {
      if (code === 0) {
        console.log('Ollama is running. Available models:\n', output);
        resolve(true);
      } else {
        console.log('Ollama not found. Please install Ollama from https://ollama.com');
        resolve(false);
      }
    });
  });
}

checkOllama();