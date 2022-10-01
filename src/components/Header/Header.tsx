import { FC } from "react";
import { PageHeader } from "antd";
import { CustomButton } from "../CustomButton/CustomButton";

import "./Header.module.css";

const Header: FC = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="INCORA COURSE"
        subTitle="created by Sashka"
        extra={[<CustomButton />]}
      ></PageHeader>
    </div>
  );
};

export default Header;
