import { useRef, useEffect } from "react";

export const useFooterInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const inputElement = inputRef.current;
    const labelEleement = labelRef.current;

    if (!inputElement || !labelEleement) return;

    const toggleStyle = (isActive: boolean) => {
      labelEleement.classList.toggle("input-active", isActive);
    };

    const handleInputFocus = () => {
      const isActive =
        inputElement.value.trim() !== "" ||
        document.activeElement === inputElement;
      toggleStyle(isActive);
    };

    inputElement.addEventListener("input", handleInputFocus);
    inputElement.addEventListener("focus", handleInputFocus);
    inputElement.addEventListener("blur", handleInputFocus);

    return () => {
      inputElement.removeEventListener("input", handleInputFocus);
      inputElement.removeEventListener("focus", handleInputFocus);
      inputElement.removeEventListener("blur", handleInputFocus);
    };
  }, []);
  return { inputRef, labelRef };
};
