import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./components/Paginatiom/Pagination";
import { IItems } from "./types/data";
import { Loader } from "./components/Loading/Loader";

function App() {
  const [data, setData] = useState<null | IItems[]>(null);
  const [activePage, setActivePage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${activePage}&size=21`
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
          {data !== null && (
            <>
              {data.map((item: IItems) => (
                <div key={item._id}>
                  {item.name}
                  {item.trips}
                </div>
              ))}
            </>
          )}
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

export default App;
