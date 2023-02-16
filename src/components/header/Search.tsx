// Modules
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

// Animations
import { searchMotion } from "../../animations/search.animation";

// Icons
import { ReactComponent as Loop } from "../../assets/icons/loop.svg";

// Types
import { RootState } from "../../types/store.types";

// Actions
import { setSearch } from "../../actions/setSearch";

const Search = () => {
  const onInputChange = (value: string) => {
    dispatch(setSearch(value));
  };
  // redux
  const dispatch = useDispatch();
  const inputValue = useSelector<RootState, RootState["search"]["value"]>(
    (state) => state.search.value
  );

  return (
    <form
      className="search"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
    >
      <input
        type="text"
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onInputChange(event.target.value)
        }
      />
      <motion.div
        initial={"rest"}
        animate={inputValue.length > 0 ? "active" : "rest"}
        variants={searchMotion}
      >
        <Loop />
        <span>Search anything...</span>
      </motion.div>
    </form>
  );
};

export default Search;
