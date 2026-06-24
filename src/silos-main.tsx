import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SiloApp from "./SiloApp.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiloApp />
  </StrictMode>,
);
