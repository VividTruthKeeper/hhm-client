// Modules
import { useState } from 'react';
import { motion } from 'framer-motion';

// Icons
import { ReactComponent as LoopGray } from '../../assets/icons/loop-gray.svg';

// Animations
import { searchFormAnimation } from '../../animations/header.animations';

const SearchForm = () => {
  const [input, setInput] = useState<string>('');
  return (
    <motion.div className="search-wrapper">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
        }}>
        <motion.div
          initial={'rest'}
          animate={input.length > 0 ? searchFormAnimation.hover : searchFormAnimation.rest}>
          <LoopGray />
          <span>Search anything</span>
        </motion.div>
        <input
          type="text"
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
      </form>
    </motion.div>
  );
};

export default SearchForm;
