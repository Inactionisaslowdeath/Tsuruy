import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FiddleDigital } from "./screens/FiddleDigital/FiddleDigital";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FiddleDigital />
  </StrictMode>,
);
