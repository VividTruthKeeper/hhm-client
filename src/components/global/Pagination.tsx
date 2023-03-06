// Icons
import { Dispatch, SetStateAction } from "react";
import { ReactComponent as Arr } from "../../assets/icons/pagintaion-arr.svg";

interface IProps {
  pages: number;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ pages, activePage, setActivePage }: IProps) => {
  const handleOnClick = (page: number) => {
    setActivePage(page);
  };
  return (
    <div className="pagination-wrapper">
      <button
        type="button"
        disabled={activePage - 1 < 1}
        onClick={() => handleOnClick(activePage - 1)}
      >
        <Arr className="pagination-arr pagination-arr-left" />
      </button>
      <div className="pagination-nums">
        <span>{activePage}</span>
      </div>
      <button
        type="button"
        disabled={activePage + 1 > pages}
        onClick={() => handleOnClick(activePage + 1)}
      >
        <Arr className="pagination-arr pagination-arr-right" />
      </button>
    </div>
  );
};

export default Pagination;
