
import React from 'react';
import type { AnalysisResult } from '../types';

interface Props {
  result: AnalysisResult | null;
  isLoading: boolean;
  error: string | null;
}

const AnalysisSection: React.FC<{ title: string; content: string | undefined }> = ({ title, content }) => (
    <div className="flex-1 min-w-[250px]">
        <h3 className="text-lg font-serif text-lime-200 border-b border-lime-500/20 pb-2 mb-2">{title}</h3>
        <div className="prose prose-sm prose-invert text-gray-300 max-w-none">
            {content?.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                    return <li key={i} className="ml-4">{trimmed.substring(2)}</li>;
                }
                return <p key={i}>{line}</p>;
            })}
        </div>
    </div>
);


const AnalysisDisplay: React.FC<Props> = ({ result, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center space-x-2">
             <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
             <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
             <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
             <span className="font-serif text-lime-200">Processing Bio-Data...</span>
          </div>
        </div>
      );
    }
    
    if (error) {
         return (
             <div className="flex items-center justify-center h-full text-center px-4">
                <p className="text-red-400 font-serif">{error}</p>
            </div>
         );
    }

    if (result) {
      return (
         <div className="flex flex-col md:flex-row gap-6 h-full">
            <AnalysisSection title="Bio-Signature Analysis" content={result.analysis} />
            <div className="w-px bg-gray-700/50 hidden md:block"></div>
            <AnalysisSection title="Pharmaceutical Orders" content={result.pharma} />
            <div className="w-px bg-gray-700/50 hidden md:block"></div>
            <AnalysisSection title="Holistic Therapy Protocol" content={result.holistic} />
        </div>
      );
    }

    return (
        <div className="flex items-center justify-center h-full">
            <p className="font-serif text-gray-500">Awaiting Patient Data for Analysis</p>
        </div>
    );
  };
  
  return (
    <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl shadow-black/30 p-4 overflow-y-auto">
        {renderContent()}
    </div>
  );
};

export default AnalysisDisplay;
