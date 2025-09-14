
import React from 'react';
import ArayaOS from './components/ArayaOS';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 selection:bg-amber-500 selection:text-gray-900 overflow-hidden">
      <ArayaOS />
    </div>
  );
};

export default App;
