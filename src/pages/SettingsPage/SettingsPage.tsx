import { Skeleton, Divider } from "antd";
import s from "./SettingsPage.module.css";

export const SettingsPage = () => {
  return (
    <div>
      <h1 className={s.title}>SETTINGS</h1>
      <Skeleton active />
      <Skeleton active />
      <Divider />
      <Skeleton active />
      <Divider />
      <Skeleton active />
    </div>
  );
};
