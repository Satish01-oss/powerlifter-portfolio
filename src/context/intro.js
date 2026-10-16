import { createContext, useContext } from "react";

const STORAGE_KEY = "intro-seen";

// True once the intro loader has finished (or was skipped).
export const IntroContext = createContext(true);

export const useIntroDone = () => useContext(IntroContext);

// The loader plays once per browser session and never for reduced-motion users.
export const shouldPlayIntro = () => {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return !sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
};

export const markIntroSeen = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage can be unavailable (private mode); the intro just plays again.
  }
};
