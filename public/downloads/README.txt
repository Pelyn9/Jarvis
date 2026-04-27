# JARVIS CODE AI - Download Instructions

## Windows (.exe) - 9+ GB
The Windows executable is built using Electron. To create your own:

```bash
# 1. Clone the repository
git clone https://github.com/Pelyn9/Jarvis.git
cd Jarvis

# 2. Install dependencies
npm install

# 3. Install Ollama on your system first
# Download from: https://ollama.com/download

# 4. Pull your desired AI models
ollama pull llama3
ollama pull mistral
ollama pull codellama

# 5. Build the Windows executable
npm run electron:build
```

The executable will be created in `release/win-unpacked/Jarvis.exe`

## Android (.apk) - 5+ GB
The Android APK requires additional setup with Capacitor:
```bash
npm install @capacitor/core @capacitor/cli
npx cap add android
npm run build
npx cap copy android
npx cap open android
# Build APK in Android Studio
```

## Ollama Integration
JARVIS uses Ollama to run AI models locally. Ollama is an open-source tool that lets you run LLMs on your machine.

### Supported Models
- Llama 3 (8B, 70B)
- Mistral (7B)
- Codellama (7B, 13B, 34B)
- Phi-3
- Qwen
- And 100+ more

### Installation (Windows)
```powershell
# Install Ollama
winget install Ollama.Ollama

# Start Ollama service
ollama serve

# Pull models
ollama pull llama3
```

### Model Storage
Models are stored at:
- Windows: `%USERPROFILE%\.ollama\models`
- macOS: `~/.ollama/models`
- Linux: `~/.ollama/models`

Total storage required: 9-15 GB depending on models installed.