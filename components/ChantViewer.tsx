
import React, { useState, useEffect, useRef } from 'react';
import type { Chant, ChantSection } from '../types';
import { ARYA_METTA_CHANT } from '../constants';
import { SpeakerIcon } from './icons/SpeakerIcon';
import { StopIcon } from './icons/StopIcon';

type Language = 'pali' | 'romanized' | 'thai';

const Section: React.FC<{ section: ChantSection; activeLang: Language }> = ({ section, activeLang }) => {
  const content = activeLang === 'pali' ? section.pali :
                  activeLang === 'romanized' ? section.romanized :
                  section.thai;

  return (
    <div className="mb-8 p-4 border-l-2 border-amber-400/50">
      <h4 className="font-serif text-xl text-amber-200 mb-2">{section.title}</h4>
      <div className={`text-gray-300 space-y-1 ${activeLang === 'pali' ? 'text-lg' : 'text-base'}`}>
        {content.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

const ChantViewer: React.FC = () => {
  const [activeLang, setActiveLang] = useState<Language>('romanized');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  const chant: Chant = ARYA_METTA_CHANT;

  const getChantTextForLang = (lang: Language): string => {
    return ARYA_METTA_CHANT.sections
        .map(section => {
            const lines = lang === 'pali' ? section.pali :
                          lang === 'romanized' ? section.romanized :
                          section.thai;
            // Include section title for context when reading
            return [section.title, ...lines].join('. ');
        })
        .join('\n\n');
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = getChantTextForLang(activeLang);
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = activeLang === 'thai' ? 'th-TH' : 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        console.error("Speech synthesis error");
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Effect for pausing/resuming speech on user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      pauseTimeoutRef.current = window.setTimeout(() => {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      }, 750); // Resume after 750ms of inactivity
    };

    if (isSpeaking) {
      window.addEventListener('mousemove', handleInteraction);
      window.addEventListener('click', handleInteraction);
    }

    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [isSpeaking]);

  // Effect to stop speech when language changes or component unmounts
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    }
  }, [activeLang]);


  const TabButton: React.FC<{ lang: Language; label: string }> = ({ lang, label }) => (
    <button
      onClick={() => setActiveLang(lang)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
        activeLang === lang
          ? 'bg-amber-400 text-gray-900 shadow-lg shadow-amber-400/20'
          : 'bg-gray-700/50 text-amber-200 hover:bg-gray-600/50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="chant" className="h-full flex flex-col max-w-4xl mx-auto">
       <h2 className="text-3xl font-serif font-semibold text-center mb-2 flex-shrink-0">{chant.title}</h2>
       <p className="text-center font-display text-cyan-300 mb-8 flex-shrink-0">{chant.romanizedTitle}</p>
      
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl shadow-black/30 flex-grow flex flex-col">
        <div className="p-4 border-b border-gray-700/50 flex justify-center items-center space-x-2 flex-shrink-0">
          <div className="flex-grow flex justify-center space-x-2">
            <TabButton lang="pali" label="Pali" />
            <TabButton lang="romanized" label="Romanized" />
            <TabButton lang="thai" label="Thai" />
          </div>
           <button 
             onClick={handleToggleSpeech} 
             className="flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-cyan-700/50 text-cyan-200 hover:bg-cyan-600/50 transition-colors"
             aria-label={isSpeaking ? "Stop reading" : "Read aloud"}
            >
             {isSpeaking ? <StopIcon /> : <SpeakerIcon />}
             <span className="hidden sm:inline">{isSpeaking ? 'Stop' : 'Read'}</span>
           </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto flex-grow">
          {chant.sections.map((section, index) => (
            <Section key={index} section={section} activeLang={activeLang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChantViewer;
