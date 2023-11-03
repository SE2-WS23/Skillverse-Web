import { Link } from "react-router-dom";
import CommonComponent from "../../components/CommonComponent";
import "./Page1.css";

function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <CommonComponent />
      <Link to="/page2">To Page 2</Link>
    </div>
  );
}

export default Page1;
