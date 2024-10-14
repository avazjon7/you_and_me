import { useState, useRef, useEffect } from "react";
import { fetchPopularSearches } from "../services/searchService";

interface Search {
  id: number;
  term: string;
  link: string;
}

const useSearch = () => {
  const [popularSearches, setPopularSearches] = useState<Search[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPopularSearches = async () => {
      const data = await fetchPopularSearches();
      setPopularSearches(data);
    };
    loadPopularSearches();
  }, []);

  useEffect(() => {
    const inputElement = inputRef.current;
    const labelElement = labelRef.current;
    const contentElement = contentRef.current;

    if (!inputElement || !contentElement || !labelElement) return;

    const toggleClass = (isActive: boolean) => {
      inputElement.classList.toggle("search-focused", isActive);
      contentElement.classList.toggle("search-focused", isActive);
      labelElement.classList.toggle("search-focused", isActive);
    };

    const handleInputFocusBlur = () => {
      const isActive =
        inputElement.value.trim() !== "" ||
        document.activeElement === inputElement;
      toggleClass(isActive);
    };

    inputElement.addEventListener("input", handleInputFocusBlur);
    inputElement.addEventListener("focus", handleInputFocusBlur);
    inputElement.addEventListener("blur", handleInputFocusBlur);

    return () => {
      inputElement.removeEventListener("input", handleInputFocusBlur);
      inputElement.removeEventListener("focus", handleInputFocusBlur);
      inputElement.removeEventListener("blur", handleInputFocusBlur);
    };
  }, []);

  return { inputRef, labelRef, contentRef, popularSearches };
};

export default useSearch;
