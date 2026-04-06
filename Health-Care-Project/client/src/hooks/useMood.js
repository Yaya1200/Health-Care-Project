// src/hooks/useMood.js
import { useState } from "react";
import { logMood } from "../services/moodService.js"; // make sure this matches your export

export default function useMood(initialMood = "") {
  const [mood, setMood] = useState(initialMood);

  // helper function to update mood and log it
  const updateMood = (newMood) => {
    setMood(newMood);
    logMood(newMood); // call your service to log mood
  };

  return { mood, setMood: updateMood };
}