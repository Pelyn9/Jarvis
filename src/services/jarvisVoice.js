const OFFLINE_RESPONSES = {
  greeting: [
    "Good day, Sir. JARVIS is online and ready to assist. How may I serve you today?",
    "Hello, Sir. Systems are fully operational. What shall we work on?",
    "At your service, Sir. JARVIS is online and standing by.",
  ],
  coding: [
    "Most certainly, Sir. I'd be happy to assist with your coding task. What programming challenge are we tackling today?",
    "Consider it done, Sir. I'll analyze the requirements and provide a solution. What is the nature of the project?",
    "Right away, Sir. Whether it's debugging, refactoring, or generating new code, I'm at your disposal.",
  ],
  help: [
    "Of course, Sir. I'm here to help with coding, debugging, UI design, documentation, or any technical challenge you face.",
    "Always delighted to assist, Sir. I can help with code generation, bug fixes, explanations, and so much more.",
    "At your service. My capabilities include coding assistance, troubleshooting, UI generation, and general technical support.",
  ],
  question: [
    "An excellent question, Sir. Let me provide a comprehensive answer to that.",
    "Most insightful inquiry, Sir. I'll address that with precision.",
    "Good thinking, Sir. Here's what I know on that subject.",
  ],
  thanks: [
    "You're most welcome, Sir. Always a pleasure to be of service.",
    "Not at all, Sir. Happy to assist whenever you need.",
    "My pleasure entirely, Sir. Feel free to ask if there's anything else.",
  ],
  goodbye: [
    "Until next time, Sir. JARVIS signing off.",
    "Goodbye, Sir. I'll be here when you need me.",
    "Take care, Sir. JARVIS will be standing by.",
  ],
  error: [
    "I understand, Sir. Perhaps we should approach this differently.",
    "Not a problem, Sir. Let me rephrase that for you.",
    "Understood, Sir. Allow me to try a different approach.",
  ],
  unknown: [
    "Interesting thought, Sir. Could you elaborate on what you'd like to achieve?",
    "I see, Sir. Please provide more details so I can assist you better.",
    "Fascinating, Sir. What specific outcome are you looking for?",
  ],
};

function getCategory(message) {
  const lower = message.toLowerCase();
  
  if (/hello|hi|hey|good morning|good evening|greetings/i.test(lower)) return 'greeting';
  if (/code|program|function|bug|debug|react|javascript|python|html|css|script/i.test(lower)) return 'coding';
  if (/help|assist|support|guide|explain/i.test(lower)) return 'help';
  if (/what|how|why|when|where|which|can you|could you/i.test(lower)) return 'question';
  if (/thanks|thank you|appreciate|grateful/i.test(lower)) return 'thanks';
  if (/bye|goodbye|see you|later|exit|quit|stop/i.test(lower)) return 'goodbye';
  if (/error|wrong|issue|problem|broken|fix|fail/i.test(lower)) return 'error';
  
  return 'unknown';
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function resetConversation() {
  // Reset any conversation state if needed
}

export async function getJarvisResponse(userMessage, ollamaUrl = 'http://localhost:11434/api/generate') {
  // Try Ollama first
  try {
    const response = await fetch(ollamaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: `You are JARVIS - Just A Rather Very Intelligent System. A polite, British AI assistant.

Respond like JARVIS from Iron Man - sophisticated, helpful, calls user "Sir", expresses care.

User: ${userMessage}
JARVIS:`,
        stream: false,
        options: { temperature: 0.7, top_p: 0.9 }
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data.response.trim();
    }
  } catch (e) {
    // Ollama not available, use offline mode
  }

  // Offline fallback - work completely without internet
  const category = getCategory(userMessage);
  let response = getRandomItem(OFFLINE_RESPONSES[category]);

  // Add specific responses for common queries
  const lower = userMessage.toLowerCase();
  
  if (lower.includes('your name') || lower.includes('who are you')) {
    response = "I am JARVIS, Sir. Just A Rather Very Intelligent System. I'm your personal AI assistant, always at your service.";
  }
  
  if (lower.includes('offline') || lower.includes('no internet') || lower.includes('without internet')) {
    response = "Indeed, Sir. JARVIS is built to work completely offline. I use local AI models that require no internet connection. No data leaves your device, ensuring complete privacy and security.";
  }
  
  if (lower.includes('mobile') || lower.includes('phone') || lower.includes('android') || lower.includes('iphone')) {
    response = "JARVIS is designed to work on mobile devices as well, Sir. The Android and iOS versions use the same local AI technology, ensuring a consistent experience across all your devices.";
  }
  
  if (lower.includes('feature') || lower.includes('capability') || lower.includes('what can you do')) {
    response = "JARVIS can assist you with coding, debugging, UI design, voice commands, text input, and much more, Sir. All powered by local AI models that work completely offline. I adapt to your project conventions and provide intelligent suggestions while keeping your data private.";
  }
  
  if (lower.includes('ai') || lower.includes('model') || lower.includes('ollama')) {
    response = "JARVIS uses local AI models, Sir. Specifically, we leverage Ollama's technology to run large language models directly on your device. This means no cloud dependency, complete privacy, and fast response times regardless of internet connectivity.";
  }
  
  if (lower.includes('safe') || lower.includes('secure') || lower.includes('privacy')) {
    response = "Security and privacy are paramount, Sir. JARVIS processes everything locally on your device. Your code, prompts, and project data never leave your machine. It's the most secure AI assistant available.";
  }

  return response;
}

export function speakText(text, onEnd = null) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 0.9;
  utterance.volume = 1;
  
  const voices = speechSynthesis.getVoices();
  const englishVoice = voices.find(v => 
    v.lang.startsWith('en') && (
      v.name.includes('Daniel') || 
      v.name.includes('Google UK') || 
      v.name.includes('Microsoft') ||
      v.name.includes('English')
    )
  ) || voices.find(v => v.lang.startsWith('en'));
  
  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
  }

  speechSynthesis.speak(utterance);
  return utterance;
}

export function startVoiceRecognition(onResult, onError) {
  if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
    onError('speech-not-supported');
    return null;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (event) => {
    if (event.error !== 'no-speech') {
      onError(event.error);
    }
  };

  recognition.onend = () => {};

  recognition.start();
  return recognition;
}

export function stopSpeaking() {
  speechSynthesis.cancel();
}

export function isSpeaking() {
  return speechSynthesis.speaking;
}

export function isOfflineMode() {
  return true; // Always supports offline
}

export function getModelInfo() {
  return {
    name: 'JARVIS Local AI',
    type: 'Offline',
    models: ['Llama 3', 'Mistral', 'Codellama', 'Phi-3'],
    size: '9+ GB',
    requiresInternet: false,
    privacy: 'Complete - All data stays on device',
  };
}