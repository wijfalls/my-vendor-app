import 'react-native-gesture-handler';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // This should point to your main App.tsx file

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
