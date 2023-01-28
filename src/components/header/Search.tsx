// Icons
import { ReactComponent as Loop } from "../../assets/icons/loop.svg";

const Search = () => {
  return (
    <form
      className="search"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
    >
      <input type="text" />
      <div>
        <Loop />
        <span>Search anything...</span>
      </div>
    </form>
  );
};

export default Search;
