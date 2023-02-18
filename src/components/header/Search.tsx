// Modules
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

// Animations
import {
  searchMotion,
  searchMobileMotion,
} from "../../animations/search.animation";

// Icons
import { ReactComponent as Loop } from "../../assets/icons/loop.svg";

// Types
import { RootState } from "../../types/store.types";

// Actions
import { setSearch } from "../../actions/setSearch";

interface IProps {
  isSmall: boolean;
  isInputFocused: boolean;
  setIsInputFocused: Dispatch<SetStateAction<boolean>>;
}

const Search = ({ isSmall, isInputFocused, setIsInputFocused }: IProps) => {
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
        onFocus={() => {
          setIsInputFocused(true);
        }}
        onBlur={() => {
          setIsInputFocused(false);
        }}
      />
      <motion.div
        className="search-content"
        initial={"rest"}
        animate={inputValue.length > 0 ? "active" : "rest"}
        variants={searchMotion}
      >
        <Loop />
        <span>Search</span>
      </motion.div>
    </form>
  );
};

export default Search;
