import { useEffect, useState } from "react";
import axios from "axios";

import { IItem } from "../../types/data";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loading/Loader";

export function PaginationPage() {
  const [data, setData] = useState<null | IItem[]>(null);
  const [activePage, setActivePage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${activePage}&size=25`
      );
      setData(response.data.data);
      setTotalPages(response.data.totalPages - 1);
      setIsLoading(false);
    };

    fetchData();
  }, [activePage]);

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
