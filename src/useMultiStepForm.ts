import { ReactElement, useState } from "react";

export function useMultiStepForm(forms: ReactElement[]) {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  function next() {
    setCurrentFormIndex((i) => {
      if (i >= forms.length - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentFormIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  function goTo(index: number) {
    setCurrentFormIndex(index);
  }
  return {
    currentFormIndex,
    currentForm: forms[currentFormIndex],
    goTo,
    next,
    back,
  };
}
