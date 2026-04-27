import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, Bot, User } from 'lucide-react';
import { getJarvisResponse, speakText, startVoiceRecognition, stopSpeaking, isSpeaking, resetConversation } from '../services/jarvisVoice';

function JarvisChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeakingState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0) {
      const initialMessage = "Good day, Sir. JARVIS is online and ready to assist. How may I serve you today?";
      setMessages([{ role: 'assistant', content: initialMessage }]);
      if (voiceEnabled) {
        setTimeout(() => speakText(initialMessage), 500);
      }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = text.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    const response = await getJarvisResponse(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);

    if (voiceEnabled) {
      setIsSpeakingState(true);
      speakText(response, () => setIsSpeakingState(false));
    }
  };

  const handleVoiceInput = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);
    
    startVoiceRecognition(
      (transcript) => {
        setIsListening(false);
        handleSendMessage(transcript);
      },
      (error) => {
        setIsListening(false);
        if (error !== 'no-speech') {
          console.error('Voice error:', error);
        }
      }
    );
  };

  const toggleVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeakingState(false);
    } else {
      setVoiceEnabled(!voiceEnabled);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(input);
    }
  };

  const handleReset = () => {
    resetConversation();
    const initialMessage = "Session cleared, Sir. JARVIS is fresh and ready to assist. What shall we work on today?";
    setMessages([{ role: 'assistant', content: initialMessage }]);
    if (voiceEnabled) {
      speakText(initialMessage);
    }
  };

  return (
    <div className="glass-panel neon-panel rounded-[2rem] overflow-hidden shadow-glow">
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/50 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/12 text-sm font-semibold text-electric">
            J
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-white">JARVIS</p>
            <p className="text-xs text-slate-400">
              {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Wikipedia Connected'}
            </p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300 transition hover:border-cyan-300/20 hover:text-white"
        >
          New Session
        </button>
      </div>

      <div className="h-[400px] overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
              msg.role === 'user' 
                ? 'border border-electric/20 bg-electric/10 text-electric' 
                : 'border border-cyan-400/15 bg-cyan-400/12 text-cyan-400'
            }`}>
              {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </div>
            <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
              msg.role === 'user'
                ? 'border border-white/10 bg-white/[0.04] text-slate-200'
                : 'border border-cyan-400/15 bg-cyan-400/8 text-slate-200'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/12 text-cyan-400">
              <Bot className="h-4 w-4" />
            </div>
            <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/8 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-white/10 bg-slate-950/50 p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleVoice}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
              voiceEnabled
                ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100'
                : 'border-white/10 bg-white/[0.03] text-slate-400'
            }`}
            title={voiceEnabled ? 'Mute' : 'Unmute'}
          >
            {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask JARVIS anything, Sir..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/30 focus:outline-none"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg bg-electric/10 text-electric transition hover:bg-electric/20"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={handleVoiceInput}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
              isListening
                ? 'border-red-400/20 bg-red-400/10 text-red-100 animate-pulse'
                : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/30 hover:text-white'
            }`}
            title={isListening ? 'Stop listening' : 'Voice input'}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">Connected to Wikipedia • Works online • Caches articles for offline use</p>
      </div>
    </div>
  );
}

export default JarvisChat;