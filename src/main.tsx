import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initIframeSync } from "./lib/iframe-sync";

// Inicializar sincronização de iframe após o DOM carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIframeSync);
} else {
  initIframeSync();
}

createRoot(document.getElementById("root")!).render(<App />);
