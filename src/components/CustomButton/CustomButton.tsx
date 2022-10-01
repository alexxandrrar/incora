import { Button } from "antd";
import { FC } from "react";

const style = {};

export const CustomButton: FC = () => {
  return (
    <div className="site-button-ghost-wrapper" style={style}>
      <Button>Logout</Button>
    </div>
  );
};
