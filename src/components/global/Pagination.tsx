// Modules
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

// Icons
import { Dispatch, SetStateAction } from 'react';
import { ReactComponent as Arr } from '../../assets/icons/pagintaion-arr.svg';

// Animation
import { paginationMotion } from '../../animations/pagination.animation';

interface IProps {
  pages: number;
  activePage: number | string;
  setActivePage: Dispatch<SetStateAction<number | string>>;
}

const Pagination = ({ pages, activePage, setActivePage }: IProps) => {
  const handleOnClick = (page: number) => {
    setActivePage(page);
  };
  return (
    <div className="pagination-wrapper">
      <button
        disabled={(activePage as number) - 1 < 1}
        onClick={() => handleOnClick((activePage as number) - 1)}>
        <Arr className="pagination-arr pagination-arr-left" />
      </button>
      <div className="pagination-nums">
        {Array.from(Array(typeof pages === 'string' ? parseInt(pages) : pages).keys()).map(
          (page) => (
            <motion.div
              key={uuidv4()}
              className="pagination-nums-item"
              onClick={() => handleOnClick(page + 1)}
              variants={paginationMotion}
              initial={'rest'}
              animate={activePage === page + 1 ? 'active' : 'rest'}>
              <span>{page + 1}</span>
            </motion.div>
          ),
        )}
      </div>
      <button
        disabled={(activePage as number) + 1 > pages}
        onClick={() => handleOnClick((activePage as number) + 1)}>
        <Arr className="pagination-arr pagination-arr-right" />
      </button>
    </div>
  );
};

export default Pagination;
