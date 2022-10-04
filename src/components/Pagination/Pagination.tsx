import { FC } from "react";
import { createNumbersArr } from "../../utils/createNumbersArr";
import s from "./Pagination.module.css";

interface IPaginationProps {
  activePage: number;
  totalPages: number;
  setActivePage(value: number): void;
}

export const Pagination: FC<IPaginationProps> = ({
  activePage,
  totalPages,
  setActivePage,
}: IPaginationProps) => {
  const buttonsArray = createNumbersArr(totalPages);
  const onNextPageHandler = (): void => {
    setActivePage(activePage + 1);
  };
  const onPrevPageHandler = (): void => {
    setActivePage(activePage - 1);
  };
  const onChangePageHandler = (item: number): void => {
    setActivePage(item);
  };
  return (
    <div className={s.pagination}>
      <button
        className={s.btn}
        disabled={activePage === 1}
        onClick={onPrevPageHandler}
      >
        prev
      </button>
      {buttonsArray.map((item: number) => (
        <button
          className={s.btn}
          style={{ backgroundColor: item === activePage ? "#1890ff" : "" }}
          key={item}
          onClick={() => onChangePageHandler(item)}
        >
          {item}
        </button>
      ))}
      <button
        className={s.btn}
        disabled={totalPages === activePage}
        onClick={onNextPageHandler}
      >
        next
      </button>
    </div>
  );
};
