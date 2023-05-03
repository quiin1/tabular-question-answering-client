import React from "react";
import { render } from 'react-dom';
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WidgetGrid from "./components/WidgetGrid";

function MyApp() {
  return (
    <>
      <title>Query Chatbot</title>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <div className="flex flex-col overflow-hidden">
        <div className="flex flex-1 text-center mb-2 mt-2 justify-center items-center">
          <img alt="" src="https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpurpleAvatar.d066304c.png&w=48&q=75"
              style={{display: 'inline-block', borderRadius: '100%', marginRight: '8px'}}/>
          <div>
            <p style={{marginBottom: 0, fontSize: '20px', fontWeight: 700}}>Query</p>
          </div>
        </div>
        <WidgetGrid />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root")
render(<MyApp />, rootElement)