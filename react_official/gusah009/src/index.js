import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './study/1_Hello_World';
import IntroducintJSX from './study/2_Introducing_JSX';
import RenderingElements from './study/3_Rendering_Elements';
import ComponentsAndProps from './study/4_Components_Props';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <IntroducintJSX />
    <RenderingElements />
    <ComponentsAndProps name="현모"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
