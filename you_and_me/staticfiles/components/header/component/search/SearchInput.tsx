import Icon from "../../../styles/IconComponent";

interface SearchInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  labelRef: React.RefObject<HTMLLabelElement>;
}

const SearchInput: React.FC<SearchInputProps> = ({ inputRef, labelRef }) => {
  return (
    <div className="header-search__input">
      <label id="search-label" htmlFor="search" ref={labelRef}>
        Search
      </label>
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        className="no-outline"
        ref={inputRef}
      />
      <button type="submit" className="search-btn">
        <Icon name="search" />
      </button>
    </div>
  );
};

export default SearchInput;
