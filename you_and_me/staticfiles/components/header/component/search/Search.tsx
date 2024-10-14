import useSearch from "../../../../hooks/useSearch";
import SearchContent from "./SearchContent";
import SearchInput from "./SearchInput";
import "./search.scss";

const Search = () => {
  const { inputRef, labelRef, contentRef, popularSearches } = useSearch();
  return (
    <form className="header-search">
      <SearchInput inputRef={inputRef} labelRef={labelRef} />
      <SearchContent
        contentRef={contentRef}
        popularSearches={popularSearches}
      />
    </form>
  );
};

export default Search;
