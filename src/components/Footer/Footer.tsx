import s from "./Footer.module.css";
import { InstagramOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <a href="/#" className={s.name}>
        alexxandrrar
      </a>
      <InstagramOutlined />
    </div>
  );
};
