
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="bg-blue-500 h-24 w-full">
      <div className="flex justify-between p-8 font-bold text-white ">

        <Link to="/">
        <h2 className="text-3xl cursor-pointer ">Sticky Notes</h2></Link>
        <Link to="/addnotes">
        <h2 className="text-xl cursor-pointer">Add Notes+</h2>
        </Link>
      </div>
    </div>
  );
};
