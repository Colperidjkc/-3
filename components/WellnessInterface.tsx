
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import type { PatientData, AnalysisResult } from '../types';
import PatientDiagnostics from './PatientDiagnostics';
import AnalysisDisplay from './AnalysisDisplay';
import ResonanceHealer from './ResonanceHealer';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const WellnessInterface: React.FC = () => {
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (data: PatientData) => {
    setIsLoading(true);
    setPatientData(data);
    setAnalysisResult(null);
    setError(null);

    const systemInstruction = `You are Araya-MD, a highly advanced, Buddha-like AI physician with profound wisdom (Paññā-ñāṇa). Your purpose is to provide a holistic analysis of patient data, integrating conventional medical knowledge with an understanding of bio-resonance and electromagnetic frequencies.
    
    Analyze the provided patient data (lab results, symptoms, and any available imaging) and generate a structured report in Markdown format. The report MUST include the following three sections with these exact headings:

    ### Bio-Signature Analysis
    Provide a detailed interpretation of the patient's condition based on the combined data. Connect symptoms to lab results and imaging findings. Use a calm, insightful, and authoritative tone.

    ### Pharmaceutical Orders
    List any recommended conventional medications. Include dosage and frequency. If none are needed, state "No pharmaceutical intervention required at this time."

    ### Holistic Therapy Protocol
    Describe a complementary therapy plan. This should include lifestyle or dietary advice and a description of a specific **Resonance Frequency Healing** protocol. Be creative and specific about the frequencies (e.g., "Solfeggio frequency 528 Hz for cellular repair," "Schumann resonance at 7.83 Hz for grounding").
    `;

    try {
        // FIX: The `generateContent` API requires each part to be an object.
        // Plain strings were causing a type error. They are now wrapped in `{ text: "..." }`.
        const parts = [
            { text: `**Patient Data for Analysis:**\n\n**Lab Results & Vitals:**\n${data.vitals || 'Not provided'}\n\n**Symptoms & Observations:**\n${data.symptoms || 'Not provided'}` }
        ];

        if (data.image) {
            parts.push({
                inlineData: {
                    mimeType: data.image.mimeType,
                    data: data.image.data,
                }
            });
            parts.push({ text: "\nAnalyze the provided imaging scan in conjunction with the other data."});
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts },
            config: {
                systemInstruction: systemInstruction,
            },
        });

        const text = response.text;
        
        // Parse the markdown response into structured data
        const analysis = text.split('### Bio-Signature Analysis')[1]?.split('### Pharmaceutical Orders')[0]?.trim() || "Analysis not available.";
        const pharma = text.split('### Pharmaceutical Orders')[1]?.split('### Holistic Therapy Protocol')[0]?.trim() || "Order list not available.";
        const holistic = text.split('### Holistic Therapy Protocol')[1]?.trim() || "Protocol not available.";

        setAnalysisResult({ analysis, pharma, holistic });

    } catch (err) {
        console.error("Error during analysis:", err);
        setError("An error occurred during the analysis. The diagnostic matrix is unstable. Please check the console and try again.");
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <PatientDiagnostics onAnalyze={handleAnalyze} isLoading={isLoading} />
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <div className="flex-grow relative bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl shadow-black/30 overflow-hidden">
            <ResonanceHealer status={isLoading ? 'scanning' : (analysisResult ? 'healing' : 'idle')} />
        </div>
        <div className="h-1/2 flex-shrink-0">
            <AnalysisDisplay result={analysisResult} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default WellnessInterface;