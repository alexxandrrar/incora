import { useEffect, useState } from "react";
import axios from "axios";
import { IItem } from "../../../types/data";

export const usePagination = () => {
  const [data, setData] = useState<null | IItem[]>(null);
  const [activePage, setActivePage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${activePage}&size=30`
      );
      setData(response.data.data);
      setTotalPages(response.data.totalPages - 1);
      setIsLoading(false);
    };

    fetchData();
  }, [activePage]);
  return {
    data,
    activePage,
    setActivePage,
    totalPages,
    isLoading,
  };
};
