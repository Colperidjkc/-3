
import React, { useState } from 'react';
import type { PatientData } from '../types';
import { ImageIcon } from './icons/ImageIcon';

interface Props {
  onAnalyze: (data: PatientData) => void;
  isLoading: boolean;
}

const PatientDiagnostics: React.FC<Props> = ({ onAnalyze, isLoading }) => {
  const [vitals, setVitals] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [image, setImage] = useState<{
    mimeType: string;
    data: string;
    preview: string;
  } | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setImage({
            mimeType: file.type,
            data: base64String,
            preview: URL.createObjectURL(file)
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!vitals.trim() && !symptoms.trim() && !image) {
        alert("Please provide some patient data to analyze.");
        return;
    }
    const imageData = image ? { mimeType: image.mimeType, data: image.data } : null;
    onAnalyze({ vitals, symptoms, image: imageData });
  };
  
  const FormLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-serif text-lime-200">{children}</label>
  );

  return (
    <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl shadow-black/30 flex flex-col">
      <div className="p-4 border-b border-gray-700/50">
        <h2 className="text-xl font-serif text-center text-lime-300">Araya-MD Diagnostics</h2>
      </div>
      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        <div>
          <FormLabel htmlFor="vitals">Lab Results & Vitals</FormLabel>
          <textarea
            id="vitals"
            value={vitals}
            onChange={(e) => setVitals(e.target.value)}
            rows={5}
            placeholder="e.g., Blood Pressure: 120/80 mmHg, Glucose: 90 mg/dL, WBC: 5.5 x 10^9/L..."
            className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none transition"
            disabled={isLoading}
          />
        </div>
        <div>
          <FormLabel htmlFor="symptoms">Symptoms & Observations</FormLabel>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows={5}
            placeholder="e.g., Patient reports persistent fatigue, mild headaches, and joint stiffness..."
            className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none transition"
            disabled={isLoading}
          />
        </div>
        <div>
          <FormLabel htmlFor="image-upload">Imaging Scans (X-Ray, MRI, etc.)</FormLabel>
           <div className="mt-2 flex items-center gap-4">
            {image?.preview ? (
              <img src={image.preview} alt="Scan Preview" className="w-20 h-20 rounded-md object-cover border-2 border-gray-600" />
            ) : (
              <div className="w-20 h-20 rounded-md bg-gray-900/50 border-2 border-dashed border-gray-600 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-gray-500" />
              </div>
            )}
            <label htmlFor="image-upload" className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${isLoading ? 'bg-gray-700/30 text-gray-500' : 'bg-gray-700/50 text-cyan-200 hover:bg-gray-600/50'}`}>
              Choose File
            </label>
            <input id="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} disabled={isLoading} />
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700/50">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full px-6 py-3 font-display font-bold text-lg rounded-md transition-all duration-300 bg-lime-400 text-gray-900 shadow-lg shadow-lime-400/20 hover:bg-lime-300 disabled:bg-gray-600 disabled:text-gray-400 disabled:shadow-none disabled:cursor-wait"
        >
          {isLoading ? 'Analyzing...' : 'Initiate Araya-MD Analysis'}
        </button>
      </div>
    </div>
  );
};

export default PatientDiagnostics;
