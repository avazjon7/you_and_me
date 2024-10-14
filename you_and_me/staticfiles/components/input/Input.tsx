import "./input.scss";
import Icon from "../styles/IconComponent";
import { useEffect, useRef, useState } from "react";
import { Category } from "../../types";

interface InputInterface {
  inputType: string;
  type: string;
  label: string;
  inputId: string;
  data?: Category[];
  required: boolean;
}

const Input: React.FC<InputInterface> = ({
  inputType,
  type,
  label,
  inputId,
  data,
  required
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLUListElement>(null);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const input = inputRef.current;
    const label = labelRef.current;
    const inputContainer = inputContainerRef.current;
    const selectorContainer = selectorRef.current;

    if (!input || !label || !inputContainer || !selectorContainer) return;

    if (type == "input") {
      const toggleClass = (isActive: boolean) => {
        inputContainer.classList.toggle("input-active", isActive);
      };

      input.removeAttribute("readonly");

      const handleInputActive = () => {
        const isActive =
          input.value.trim() !== "" || document.activeElement === input;
        toggleClass(isActive);
      };

      input.addEventListener("click", handleInputActive);
      input.addEventListener("focus", handleInputActive);
      input.addEventListener("blur", handleInputActive);

      return () => {
        input.removeEventListener("click", handleInputActive);
        input.removeEventListener("focus", handleInputActive);
        input.removeEventListener("blur", handleInputActive);
      };
    }

    if (type == "selector") {
      const handleSelectorToggle = () => {
        inputContainer.classList.toggle("selector-active");
      };

      input.addEventListener("click", handleSelectorToggle);
      inputContainer
        .querySelector(".unm-icon")
        ?.addEventListener("click", handleSelectorToggle);
      input.setAttribute("readonly", "true");

      const handleSelectorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === "LI") {
          const selectedText = target.innerText;

          setSelectedValue(selectedText);
          input.value = selectedText;

          inputContainer.classList.remove("selector-active");
        }
      };

      selectorContainer.addEventListener("click", handleSelectorClick);

      return () => {
        input.removeEventListener("click", handleSelectorToggle);
        selectorContainer.removeEventListener("click", handleSelectorClick);
      };
    }
  }, []);

  return (
    <div
      className={`input${type === "selector" ? " selector" : ""}`}
      ref={inputContainerRef}
    >
      <input
        type={inputType}
        className="no-outline"
        ref={inputRef}
        id={inputId}
        name={inputId}
        required={required}
      />
      <label htmlFor={inputId} ref={labelRef}>
        {selectedValue || label}{required && <span>*</span>}
      </label>
      {type === "selector" && <Icon name="arrowDown" />}
      <ul className="selector-data" ref={selectorRef}>
        {data ? (
          data?.map((item) => (
            item.subCategory.map((subItem) => (
              <li key={subItem.id}>{subItem.title}</li>
            ))
          ))
        ) : (
          <p>No data is available</p>
        )}
      </ul>
      <p className="errorMsg">Error</p>
    </div>
  );
};

export default Input;
