import { FC } from "react";
import s from "./Footer.module.css";
import { InstagramOutlined } from "@ant-design/icons";

export const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <a className={s.name}>alexxandrrar </a>
      <InstagramOutlined />
    </div>
  );
};
