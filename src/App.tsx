import { useEffect, useState } from "react";
import axios from "axios";
import { IItems } from "./types/data";

function App() {
  const [data, setData] = useState<null | IItems[]>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
      );
      setData(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default App;
