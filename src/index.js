import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'
import './index.css'

const root = createRoot(document.querySelector("#root"));

root.render(<App />);