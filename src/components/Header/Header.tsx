import { useNavigate } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import { PageHeader } from "antd";
import { CustomButton } from "../CustomButton/CustomButton";

import s from "./Header.module.css";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const onClickHandler = () => {
    if (token !== null) localStorage.clear();
    navigate("/logination");
    window.location.reload();
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div className={s.site_page_header_ghost_wrapper}>
      <PageHeader
        ghost={false}
        title="INCORA COURSE"
        subTitle="created by Sashka"
        extra={[
          <CustomButton key={"1"} onClick={onClickHandler}>
            {token !== null ? "Logout" : "Login"}
          </CustomButton>,
        ]}
      ></PageHeader>
    </div>
  );
};
