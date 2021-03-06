import React from 'react';
import ReactDOM from 'react-dom';
import './functionBased/index.css';
import  "./functionBased/App.css"
import { BrowserRouter as Router } from "react-router-dom"

import TodoContainer from './functionBased/components/TodoContainer'



// ReactDOM.render(<TodoContainer />, document.getElementById("root"))
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)