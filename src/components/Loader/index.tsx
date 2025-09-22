import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}

export default Loader;
