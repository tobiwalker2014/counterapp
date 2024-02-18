// Import the necessary modules
import React from 'react' // React library for building user interfaces
import ReactDOM from 'react-dom'; // React library for DOM manipulation
import App from './App'; // Main App component
import './index.css'; // Styles for the app
import { Provider } from 'react-redux'; // React-Redux Provider for making the Redux store available to the app
import store from './redux/store'; // The Redux store

// Use ReactDOM to render the App component into the DOM
// The App component is wrapped with the Provider component to make the Redux store available to all components in the component tree
// The target DOM node is identified by the id 'root'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);