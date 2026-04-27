import { 
  fetchWikipediaArticle, 
  searchWikipedia, 
  searchCache, 
  getFavorites,
  addToFavorites,
  removeFromFavorites,
  getCacheSize,
  getRandomWikipediaArticle
} from '../services/wikipediaService';

const GREETING_KEYWORDS = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening'];
const THANKS_KEYWORDS = ['thanks', 'thank you', 'appreciate', 'grateful'];
const GOODBYE_KEYWORDS = ['bye', 'goodbye', 'see you', 'later', 'exit', 'quit', 'stop'];
const WHO_ARE_YOU = ['who are you', 'what are you', 'your name', 'what is your name'];
const CAN_YOU_DO = ['what can you do', 'capabilities', 'features', 'abilities', 'help me'];

function matchesKeywords(message, keywords) {
  return keywords.some(kw => message.toLowerCase().includes(kw));
}

function getGreetingResponse() {
  const responses = [
    "Good day, Sir. JARVIS is online and ready to assist. I have access to Wikipedia's vast knowledge. What would you like to learn about today?",
    "Hello, Sir. I'm connected to Wikipedia's entire knowledge base. Ask me anything!",
    "At your service, Sir. I can search and explain topics from Wikipedia. What interests you?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function getThanksResponse() {
  const responses = [
    "You're most welcome, Sir. Always a pleasure to assist.",
    "My pleasure entirely, Sir. Feel free to ask if you need anything else.",
    "Not at all, Sir. Happy to help with any question.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function getGoodbyeResponse() {
  const responses = [
    "Until next time, Sir. JARVIS signing off.",
    "Goodbye, Sir. I'll be here when you need me.",
    "Take care, Sir. Call on me anytime.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function getWhoAreYouResponse() {
  return "I am JARVIS, Sir. Just A Rather Very Intelligent System. I'm connected to Wikipedia's entire knowledge base, allowing me to answer questions on virtually any topic - history, science, geography, health, and much more. Think of me as your personal offline Wikipedia. What would you like to know?";
}

function getCapabilitiesResponse() {
  return "I can help you with many things, Sir:\n\n• Answer questions from Wikipedia on any topic\n• Explain science, history, geography, and more\n• Provide health and medical information\n• Help with cooking recipes\n• Search for information and save your favorites\n• Much more!\n\nJust ask me anything, Sir!";
}

function getHelpResponse() {
  return "I can help you with any question, Sir. Try asking:\n\n• 'What is artificial intelligence?'\n• 'Tell me about the solar system'\n• 'How does photosynthesis work?'\n• 'Who was Albert Einstein?'\n• 'What is diabetes?'\n• 'How do I cook adobo?'\n\nJust ask naturally and I'll search Wikipedia for the answer!";
}

export function resetConversation() {
  // Reset any conversation state if needed
}

export async function getJarvisResponse(userMessage, isOnline = true) {
  const lowerMessage = userMessage.toLowerCase();
  
  // Handle greeting
  if (matchesKeywords(lowerMessage, GREETING_KEYWORDS)) {
    return getGreetingResponse();
  }
  
  // Handle thanks
  if (matchesKeywords(lowerMessage, THANKS_KEYWORDS)) {
    return getThanksResponse();
  }
  
  // Handle goodbye
  if (matchesKeywords(lowerMessage, GOODBYE_KEYWORDS)) {
    return getGoodbyeResponse();
  }
  
  // Handle "who are you"
  if (matchesKeywords(lowerMessage, WHO_ARE_YOU)) {
    return getWhoAreYouResponse();
  }
  
  // Handle "what can you do"
  if (matchesKeywords(lowerMessage, CAN_YOU_DO)) {
    return getCapabilitiesResponse();
  }
  
  // Try to find answer from Wikipedia
  if (isOnline) {
    try {
      // First try direct article fetch
      const article = await fetchWikipediaArticle(userMessage);
      if (article && article.extract) {
        return `${article.extract}\n\nIs there anything else you'd like to know, Sir?`;
      }
      
      // Try search
      const results = await searchWikipedia(userMessage);
      if (results && results.length > 0) {
        const topResult = results[0];
        const articleDetail = await fetchWikipediaArticle(topResult.title);
        
        if (articleDetail && articleDetail.extract) {
          return `${articleDetail.extract}\n\nLearn more: ${articleDetail.url}\n\nWould you like more information on this topic, Sir?`;
        }
        
        return `${topResult.description || 'I found something for you:'}\n\n${results.slice(0, 3).map((r, i) => `${i + 1}. ${r.title}`).join('\n')}\n\nWhich topic interests you, Sir?`;
      }
    } catch (e) {
      console.log('Wikipedia search failed, trying cache:', e);
    }
  }
  
  // Try offline cache
  const cachedResults = searchCache(userMessage);
  if (cachedResults.length > 0) {
    return `${cachedResults[0].extract}\n\n(This answer is from your cached Wikipedia articles, Sir.)`;
  }
  
  // Fallback response
  return `I don't have that information in my database yet, Sir. Try rephrasing your question, or make sure you have an internet connection so I can search Wikipedia for you.\n\nYou can also try asking about:\n• Specific topics (science, history, health)\n• People (scientists, historical figures)\n• Places (countries, cities)\n• Concepts (physics, biology)\n\nHow may I assist you further, Sir?`;
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
  return false;
}

export function getModelInfo() {
  return {
    name: 'JARVIS + Wikipedia',
    type: 'Online/Offline Hybrid',
    cacheSize: getCacheSize(),
    favoritesCount: getFavorites().length,
    requiresInternet: 'Recommended for best results',
    features: [
      'Wikipedia Search',
      'Article Caching',
      'Save Favorites',
      'Voice Input',
      'Text-to-Speech',
    ],
    privacy: 'Your searches help build offline cache',
  };
}