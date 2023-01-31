// Modules
import { useState } from "react";
import { motion } from "framer-motion";

// Animations
import { searchMotion } from "../../animations/search.animation";

// Icons
import { ReactComponent as Loop } from "../../assets/icons/loop.svg";

const Search = () => {
  const [input, setInput] = useState<string>("");
  return (
    <form
      className="search"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
    >
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInput(event.target.value)
        }
      />
      <motion.div
        initial={"rest"}
        animate={input.length > 0 ? "active" : "rest"}
        variants={searchMotion}
      >
        <motion.svg>
          <Loop />
        </motion.svg>
        <span>Search anything...</span>
      </motion.div>
    </form>
  );
};

export default Search;
