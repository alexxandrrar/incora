import { FC } from "react";
import { createNumbersArr } from "../../utils/createNumbersArr";

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
    <div>
      <button disabled={activePage === 1} onClick={onPrevPageHandler}>
        Prev
      </button>
      {buttonsArray.map((item: number) => (
        <button
          style={{ backgroundColor: item === activePage ? "green" : "" }}
          key={item}
          onClick={() => onChangePageHandler(item)}
        >
          {item}
        </button>
      ))}
      <button disabled={totalPages === activePage} onClick={onNextPageHandler}>
        Next
      </button>
    </div>
  );
};
