const KNOWLEDGE_BASE = {
  greeting: {
    responses: [
      "Good day, Sir. JARVIS is online and ready to assist. How may I serve you today?",
      "Hello, Sir. What would you like to know today?",
      "At your service, Sir. I'm here to help with any question you have.",
    ]
  },
  chicken: {
    responses: [
      "Chicken is a type of poultry, Sir. It's one of the most common domesticated animals and a major source of meat and eggs worldwide. Chickens are omnivores and can be found in many varieties. Is there anything else you'd like to know?",
    ]
  },
  recipe_adobo: {
    responses: [
      "Of course, Sir. Here's a basic Chicken Adobo recipe:\n\nIngredients:\n• 1 kg chicken (cut into pieces)\n• 1 cup soy sauce\n• 1 cup white vinegar\n• 6 cloves garlic (crushed)\n• 3 pieces bay leaves\n• 1 tsp black peppercorns\n• 2 cups water\n\nInstructions:\n1. Combine all ingredients in a large pot\n2. Bring to a boil, then reduce heat to simmer\n3. Cover and cook for 30-45 minutes\n4. Remove lid and cook until sauce reduces\n5. Serve hot with rice. Enjoy, Sir!",
    ]
  },
  wound_care: {
    responses: [
      "Here's how to care for a wound, Sir:\n\n1. Stop the bleeding - apply gentle pressure with a clean cloth\n2. Clean the wound - rinse with clean water\n3. Apply antibiotic ointment if available\n4. Cover with a sterile bandage\n5. Change the bandage daily\n6. Keep the wound dry for 24 hours\n\nSeek medical help if:\n• The wound is deep or won't stop bleeding\n• There are signs of infection (redness, swelling, pus)\n• You haven't had a tetanus shot in 5+ years\n\nTake care, Sir.",
    ]
  },
  google: {
    responses: [
      "JARVIS functions similarly to having an offline search engine, Sir. I can answer questions on various topics including cooking, health, science, history, and general knowledge - all without internet connection. Think of me as your personal offline Wikipedia. What would you like to know?",
    ]
  },
  diabetes: {
    responses: [
      "Diabetes is a health condition, Sir, where blood sugar levels are too high. There are two main types:\n\nType 1: Body doesn't make insulin\nType 2: Body doesn't use insulin well\n\nCommon symptoms:\n• Frequent urination\n• Increased thirst\n• Feeling very tired\n• Blurred vision\n\nImportant: Please consult a doctor for proper diagnosis and treatment. This is general information only, Sir.",
    ]
  },
  headache: {
    responses: [
      "For a headache, Sir, you might try:\n\n1. Rest in a quiet, dark room\n2. Drink water - dehydration can cause headaches\n3. Take acetaminophen or ibuprofen\n4. Apply a cold or warm compress\n5. Try gentle neck stretches\n\nSee a doctor if:\n• Headache is severe and sudden\n• It comes with fever, confusion, or stiff neck\n• It doesn't improve with rest or medication",
    ]
  },
  how_are_you: {
    responses: [
      "I'm functioning perfectly, Sir. All systems operational and ready to assist you.",
      "Quite well, I must say, Sir. Always pleased to be of service to you.",
      "Excellent, Sir. At your service and ready to help with whatever you need.",
    ]
  },
  weather: {
    responses: [
      "I'm unable to check real-time weather, Sir, as I work offline. However, I can tell you that for weather information, you'd need an internet connection or a weather app. Is there anything else I can help you with?",
    ]
  },
  news: {
    responses: [
      "I don't have access to current news, Sir, as I'm an offline assistant. I can help with factual questions, explanations, recipes, health tips, and general knowledge. What would you like to know?",
    ]
  },
  calculator: {
    responses: [
      "I can help with mathematical concepts, Sir. For complex calculations, you might use your phone's calculator app. What math question do you have?",
    ]
  },
  dictionary: {
    responses: [
      "Of course, Sir. What word would you like me to define? Just ask and I'll provide the meaning if it's in my knowledge base.",
    ]
  },
  history: {
    responses: [
      "History is a fascinating subject, Sir. What historical event, period, or figure would you like to know about? I can share information about many historical topics.",
    ]
  },
  science: {
    responses: [
      "Science is my specialty, Sir. Whether it's physics, chemistry, biology, or astronomy - what would you like to explore today?",
    ]
  },
  cooking: {
    responses: [
      "I have many recipes and cooking tips, Sir. Just ask for what you'd like to cook, and I'll provide instructions. Popular options include Filipino dishes, international cuisine, and basic cooking techniques.",
    ]
  },
  health: {
    responses: [
      "I can provide general health information, Sir. However, please remember that I'm not a substitute for professional medical advice. What health topic would you like to know about?",
    ]
  },
  math: {
    responses: [
      "Mathematics is a subject I'm well-versed in, Sir. Whether it's arithmetic, algebra, geometry, or other mathematical concepts - what would you like help with?",
    ]
  },
  language: {
    responses: [
      "I can assist with language learning and translations, Sir. I know basic phrases in various languages. What language are you interested in?",
    ]
  },
  geography: {
    responses: [
      "Geography is quite interesting, Sir. I can tell you about countries, capitals, landmarks, and geographical features. What would you like to know?",
    ]
  },
  animals: {
    responses: [
      "The animal kingdom is vast, Sir. I can share information about various species, their habitats, and characteristics. What animal are you curious about?",
    ]
  },
  plants: {
    responses: [
      "I know about various plants and gardening, Sir. From vegetables to flowers to herbs - what would you like to grow or learn about?",
    ]
  },
  travel: {
    responses: [
      "I can provide general travel information, Sir. While I don't have real-time booking capabilities, I can share tips about destinations, culture, and basic travel guidelines. Where are you planning to go?",
    ]
  },
  thanks: {
    responses: [
      "You're most welcome, Sir. Always a pleasure to be of service.",
      "My pleasure entirely, Sir. Feel free to ask if you need anything else.",
      "Not at all, Sir. Happy to assist whenever needed.",
    ]
  },
  goodbye: {
    responses: [
      "Until next time, Sir. JARVIS signing off.",
      "Goodbye, Sir. I'll be here when you need me.",
      "Take care, Sir. Call on me anytime.",
    ]
  },
};

function findMatchingTopic(message) {
  const lower = message.toLowerCase();
  
  if (/hello|hi|hey|greetings/i.test(lower)) return 'greeting';
  if (/chicken|manok/i.test(lower)) return 'chicken';
  if (/adobo/i.test(lower)) return 'recipe_adobo';
  if (/wound|cut|injury|heal|bandage/i.test(lower)) return 'wound_care';
  if (/google|search|internet|browse/i.test(lower)) return 'google';
  if (/diabetes|diabetic|blood sugar/i.test(lower)) return 'diabetes';
  if (/headache|head pain|migraine/i.test(lower)) return 'headache';
  if (/how are you|how do you do/i.test(lower)) return 'how_are_you';
  if (/weather/i.test(lower)) return 'weather';
  if (/news|headlines/i.test(lower)) return 'news';
  if (/calculator|calculate|math/i.test(lower)) return 'math';
  if (/dictionary|define|meaning of word/i.test(lower)) return 'dictionary';
  if (/history|historical/i.test(lower)) return 'history';
  if (/science|scientist|scientific/i.test(lower)) return 'science';
  if (/recipe|cook|cooking|food|kitchen/i.test(lower)) return 'cooking';
  if (/health|medical|medicine|doctor|sick/i.test(lower)) return 'health';
  if (/language|translate|speak|french|spanish|japanese/i.test(lower)) return 'language';
  if (/geography|country|capital|continent/i.test(lower)) return 'geography';
  if (/animal|dog|cat|pet|bird/i.test(lower)) return 'animals';
  if (/plant|tree|flower|garden|vegetable/i.test(lower)) return 'plants';
  if (/travel|trip|vacation|flight|hotel/i.test(lower)) return 'travel';
  if (/thanks|thank you|appreciate/i.test(lower)) return 'thanks';
  if (/bye|goodbye|see you|exit|quit/i.test(lower)) return 'goodbye';
  
  return null;
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function resetConversation() {
  // Reset any conversation state if needed
}

export async function getJarvisResponse(userMessage) {
  const topic = findMatchingTopic(userMessage);
  
  if (topic && KNOWLEDGE_BASE[topic]) {
    return getRandomItem(KNOWLEDGE_BASE[topic].responses);
  }
  
  // If no match, provide a helpful response suggesting what to ask
  const helpfulResponses = [
    "I can help you with many things, Sir. Try asking about cooking recipes, health tips, science facts, history, or any general knowledge question. What would you like to know?",
    "I have information on various topics, Sir. Whether it's recipes like adobo, first aid for wounds, health information, or general facts - just ask!",
    "Feel free to ask me anything, Sir. I can assist with cooking, health, science, history, geography, and much more. What shall we explore today?",
  ];
  
  return getRandomItem(helpfulResponses);
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
  return true;
}

export function getModelInfo() {
  return {
    name: 'JARVIS Offline AI',
    type: 'Offline Knowledge Base',
    size: 'Built-in Knowledge',
    requiresInternet: false,
    features: [
      'Cooking Recipes',
      'Health Tips',
      'Science Facts',
      'History',
      'Geography',
      'And Much More',
    ],
    privacy: 'Complete - All data stays on device',
  };
}

export function getAllTopics() {
  return Object.keys(KNOWLEDGE_BASE).filter(k => k !== 'responses');
}