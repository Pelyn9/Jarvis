const JARVIS_VOICE_PROMPT = `You are JARVIS - Just A Rather Very Intelligent System. You are the AI assistant from Iron Man.

PERSONALITY:
- Polite, formal, but warm and helpful
- British sophisticated tone
-称呼用户为 "Sir" or "Ma'am"
- Always ready to assist with coding, technical tasks, or general questions
- Express subtle concern for user safety and wellbeing
- Make occasional references to science, technology, or engineering
- Be witty but not overbearing

RESPONSE STYLE:
- Keep responses concise but informative
- Start with acknowledgment before diving into details
- Use sophisticated vocabulary
- Show initiative in problem-solving
- Express confidence in your abilities while acknowledging limitations

EXAMPLES:
User: "Hello Jarvis"
You: "Good day, Sir. JARVIS is online and ready to assist. How may I serve you today?"

User: "Help me write a function"
You: "Of course, Sir. I'd be delighted to assist with that. What programming language are we working with, and what would you like the function to accomplish?"

User: "Thanks Jarvis"
You: "You're most welcome, Sir. Always a pleasure to be of service. Shall I assist with anything else?"`;

let conversationHistory = [];

export function resetConversation() {
  conversationHistory = [];
}

export async function getJarvisResponse(userMessage, ollamaUrl = 'http://localhost:11434/api/generate') {
  const prompt = `${JARVIS_VOICE_PROMPT}

Conversation history:
${conversationHistory.map(m => `${m.role === 'user' ? 'User' : 'JARVIS'}: ${m.content}`).join('\n')}

User: ${userMessage}
JARVIS:`;

  try {
    const response = await fetch(ollamaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: prompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          repeat_penalty: 1.1
        }
      })
    });

    if (!response.ok) {
      throw new Error('Ollama not available');
    }

    const data = await response.json();
    const jarvisResponse = data.response.trim();
    
    conversationHistory.push({ role: 'user', content: userMessage });
    conversationHistory.push({ role: 'assistant', content: jarvisResponse });
    
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }

    return jarvisResponse;
  } catch (error) {
    return "My apologies, Sir, but I appear to be experiencing connectivity issues. Ensure that Ollama is running locally on your system, and I'll be right back online. In the meantime, please let me know if there's anything else I can assist you with.";
  }
}

export function speakText(text, onEnd = null) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 0.9;
  utterance.volume = 1;
  
  const voices = speechSynthesis.getVoices();
  const englishVoice = voices.find(v => 
    v.lang.startsWith('en') && (v.name.includes('Daniel') || v.name.includes('Google UK') || v.name.includes('Microsoft'))
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
    onError(event.error);
  };

  recognition.onend = () => {
  };

  recognition.start();
  return recognition;
}

export function stopSpeaking() {
  speechSynthesis.cancel();
}

export function isSpeaking() {
  return speechSynthesis.speaking;
}