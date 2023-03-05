// Modules
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

// Animations
import {
  searchMotion,
  searchMobileMotion,
} from "../../animations/search.animation";

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

  const searchValue = useSelector<RootState, RootState["search"]["value"]>(
    (state) => state.search.value
  );

  // redux
  const dispatch = useDispatch();
  const inputValue = useSelector<RootState, RootState["search"]["value"]>(
    (state) => state.search.value
  );

  const navigate = useNavigate();

  const formRef = useRef(null);

  return (
    <motion.form
      ref={formRef}
      className="search"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchValue.length > 0) {
          navigate(`/search/${inputValue}`);
        }
      }}
      variants={searchMobileMotion}
      initial={isSmall ? "borderRest" : {}}
      animate={isSmall ? (isInputFocused ? "borderActive" : "borderRest") : {}}
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
          onInputChange("");
        }}
      />
      <motion.div
        className="search-content"
        initial={"rest"}
        animate={inputValue.length > 0 ? "active" : "rest"}
        variants={searchMotion}
      >
        <motion.svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={searchMobileMotion}
          initial={isSmall ? "loopRest" : "loopActive"}
          animate={
            isSmall
              ? isInputFocused
                ? "loopActive"
                : "loopRest"
              : "loopActive"
          }
        >
          <g clipPath="url(#clip0_138_523)">
            <path
              d="M11.9163 12.8394L10.833 11.7561M6.22884 12.2978C6.9046 12.2978 7.57375 12.1647 8.19807 11.9061C8.82239 11.6475 9.38966 11.2684 9.8675 10.7906C10.3453 10.3128 10.7244 9.74548 10.983 9.12116C11.2416 8.49684 11.3747 7.8277 11.3747 7.15194C11.3747 6.47618 11.2416 5.80703 10.983 5.18271C10.7244 4.55839 10.3453 3.99112 9.8675 3.51328C9.38966 3.03545 8.82239 2.65641 8.19807 2.39781C7.57375 2.1392 6.9046 2.0061 6.22884 2.0061C4.86408 2.0061 3.55522 2.54825 2.59019 3.51328C1.62516 4.47831 1.08301 5.78718 1.08301 7.15194C1.08301 8.5167 1.62516 9.82556 2.59019 10.7906C3.55522 11.7556 4.86408 12.2978 6.22884 12.2978V12.2978Z"
              stroke="#A6A6A6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_138_523">
              <rect
                width="13"
                height="13"
                fill="white"
                transform="translate(0 0.922791)"
              />
            </clipPath>
          </defs>
        </motion.svg>
        <motion.span
          variants={searchMobileMotion}
          initial={isSmall ? "placeholderRest" : {}}
          animate={
            isSmall
              ? isInputFocused
                ? "placeholderActive"
                : "placeholderRest"
              : {}
          }
        >
          Search
        </motion.span>
      </motion.div>
    </motion.form>
  );
};

export default Search;
