import { FC } from "react";
import s from "./Footer.module.css";
import { FireOutlined } from "@ant-design/icons";

export const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <FireOutlined />
    </div>
  );
};
