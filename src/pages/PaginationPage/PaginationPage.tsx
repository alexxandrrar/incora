import { IItem } from "../../types/data";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loading/Loader";
import { usePagination } from "../../components/hooks/usePagination/usePagination";

export function PaginationPage() {
  const { data, activePage, setActivePage, totalPages, isLoading } =
    usePagination();

  return (
    <div className="App">
      {isLoading === true ? (
        <Loader />
      ) : (
        <>
          {data !== null &&
            data.map((item: IItem) => (
              <div key={item._id}>
                {item.name}
                {item.trips}
              </div>
            ))}
          <Pagination
            setActivePage={setActivePage}
            activePage={activePage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}
