import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Buffer } from "buffer";
import process from "process";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RootContextProvider from "./Context/RootContextProvider.jsx";

window.global = window;
window.Buffer = Buffer;
window.process = process;

createRoot(document.getElementById("root")).render(
  <RootContextProvider>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </RootContextProvider>
);
