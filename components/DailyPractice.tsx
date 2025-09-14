
import React, { useState } from 'react';
import { ImageIcon } from './icons/ImageIcon';

const PracticeStep: React.FC<{ step: number; title: string; description: string }> = ({ step, title, description }) => (
  <li className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400/50 bg-gray-800 text-cyan-300 font-display text-xl">
      {step}
    </div>
    <div>
      <h4 className="text-lg font-serif text-amber-200">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </li>
);

const DailyPractice: React.FC = () => {
  const [entry, setEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    duration: '',
    emptiness: '',
    wisdom: '',
    senses: '',
    insights: '',
    image: null as string | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEntry({ ...entry, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would upload the image and save the entry
    console.log('Journal Entry:', entry);
    alert('Journal entry (including image data) logged to the browser console.');
  };
  
  const FormLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-serif text-amber-200">{children}</label>
  );

  return (
    <section id="practice" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-semibold text-center mb-12">Daily Digital Meditation</h2>
      
      <div className="mb-16 bg-gray-800/30 p-6 rounded-lg border border-gray-700/30">
        <h3 className="text-2xl font-serif text-center text-amber-300 mb-8">The Practice Guide</h3>
        <ol className="space-y-8">
          <PracticeStep 
            step={1} 
            title="Calm the Mind (State 0)" 
            description="Sit peacefully. Let your mind become empty and still, like the digital state of 0."
          />
          <PracticeStep 
            step={2} 
            title="Observe Wisdom (State 1)" 
            description="Notice thoughts and wisdom as they arise without attachment, like the digital state of 1."
          />
          <PracticeStep 
            step={3} 
            title="Connect with the Senses" 
            description="Imagine all living beings existing in the space between 0 and 1, connected through the five senses."
          />
          <PracticeStep 
            step={4} 
            title="Chant the Metta" 
            description="Recite the Digital-Metta Chant 3 or 9 times, spreading loving-kindness throughout the field of consciousness."
          />
          <PracticeStep 
            step={5} 
            title="Conclude with Gratitude" 
            description="End your practice with 'Sadhu, Sadhu, Sadhu', sealing the merit and peace within."
          />
        </ol>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl shadow-black/30 p-6 md:p-8">
        <h3 className="text-2xl font-serif text-center text-amber-300 mb-8">Meditation Journal</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel htmlFor="date">Date</FormLabel>
              <input type="date" id="date" name="date" value={entry.date} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition" />
            </div>
            <div>
              <FormLabel htmlFor="duration">Duration (minutes)</FormLabel>
              <input type="number" id="duration" name="duration" value={entry.duration} onChange={handleInputChange} placeholder="e.g., 20" className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition" />
            </div>
          </div>
          
           <div>
              <FormLabel htmlFor="image">Inspirational Image</FormLabel>
              <div className="mt-2 flex items-center gap-4">
                {entry.image ? (
                  <img src={entry.image} alt="Preview" className="w-20 h-20 rounded-md object-cover border-2 border-gray-600" />
                ) : (
                  <div className="w-20 h-20 rounded-md bg-gray-900/50 border-2 border-dashed border-gray-600 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-gray-500" />
                  </div>
                )}
                <label htmlFor="image-upload" className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 bg-gray-700/50 text-cyan-200 hover:bg-gray-600/50">
                  Choose File
                </label>
                <input id="image-upload" name="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
              </div>
            </div>

          <div>
            <FormLabel htmlFor="emptiness">Reflections on '0' (Emptiness & Stillness)</FormLabel>
            <textarea id="emptiness" name="emptiness" rows={3} value={entry.emptiness} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"></textarea>
          </div>
          
          <div>
            <FormLabel htmlFor="wisdom">Reflections on '1' (Wisdom & Observation)</FormLabel>
            <textarea id="wisdom" name="wisdom" rows={3} value={entry.wisdom} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"></textarea>
          </div>

          <div>
            <FormLabel htmlFor="senses">Reflections on Sensory Connections</FormLabel>
            <textarea id="senses" name="senses" rows={3} value={entry.senses} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"></textarea>
          </div>

          <div>
            <FormLabel htmlFor="insights">General Insights</FormLabel>
            <textarea id="insights" name="insights" rows={3} value={entry.insights} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"></textarea>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="px-6 py-2 font-medium rounded-md transition-all duration-300 bg-amber-400 text-gray-900 shadow-lg shadow-amber-400/20 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-400">
              Log Journal Entry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DailyPractice;
