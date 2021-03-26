import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>an app</div>;
}

function render(element) {
  ReactDOM.render(<App />, element);
}

render(document.getElementById('app'));
