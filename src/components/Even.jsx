import { Link } from "react-router-dom";
function Even() {
  const me = () => {
    alert("You");
  };
  return (
    <div>
      <Link to={"/blogs"}>
        <button className=" flex justify-center bg-blue-400 p-4 text-center">
          Cleck!
        </button>
      </Link>
      <button className=" bg-yellow-500 text-white text-xs p-4" onClick={me}>Alert</button>
    </div>
  );
}
export default Even;
