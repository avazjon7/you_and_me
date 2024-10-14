import { Link } from "react-router-dom";
import Icon from "../../../styles/IconComponent";

interface SearchContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
  popularSearches: { id: number; term: string; link: string }[];
}

const SearchContent: React.FC<SearchContentProps> = ({
  contentRef,
  popularSearches,
}) => {
  return (
    <div className="header-search__content" ref={contentRef}>
      <h2>Popular:</h2>
      {popularSearches.map((search) => (
        <Link key={search.id} to={search.link}>
          <Icon name="search" /> {search.term}
        </Link>
      ))}
    </div>
  );
};

export default SearchContent;
