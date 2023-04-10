import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { setDataThemeOnHtmlElement, Theme } from "./components/Menu/useThemeToggle";
import { getObject } from "local-storage-superjson";

setDataThemeOnHtmlElement(getObject<Theme>("theme"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="hero">
      <main className="hero-content">
        <App />
      </main>
    </div>
  </React.StrictMode>
);
