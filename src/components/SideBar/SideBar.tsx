import { FC } from "react";
import { Link } from "react-router-dom";

const SideBar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/firstTask">Task 1</Link>
        </li>
        <li>
          <Link to="/pagination">Task 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
