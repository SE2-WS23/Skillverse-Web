import { Link } from "react-router-dom";
import CommonComponent from "../../components/CommonComponent";
import ExclusiveComponent from "./components/ExclusiveComponent";

function page2() {
  return (
    <>
      <h1>Page 2</h1>
      <CommonComponent />
      <ExclusiveComponent />
      <Link to="/">To Page 1</Link>
    </>
  );
}

export default page2;
