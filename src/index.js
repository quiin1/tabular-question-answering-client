import React from "react";
import { render } from 'react-dom';
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "./components/MainHeader";
import WidgetGrid from "./components/WidgetGrid";

function MyApp() {
  return (
    <>
      <title>Tapex Chatbot</title>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <div className="flex flex-col overflow-hidden">
        {/* <MainHeader /> */}
        <div className="flex-1 text-center mb-4">
          <h1>Tapex Chatbot</h1>
        </div>
        <WidgetGrid />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root")
render(<MyApp />, rootElement)