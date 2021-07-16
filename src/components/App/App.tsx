import React, { FC } from 'react';
import './App.css';
import MainPanel from '../MainPanel/MainPanel';

const App: FC = () => {
  return (
          <div className="has-text-centered">
              <MainPanel title="Choose the city name and press the button" />
            </div>
  );
}

export default App;
