import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [update,setUpdate]=useState(0);
const navigate=useNavigate();
  function handleDelete(id) {
    axios.delete(`http://localhost:3001/${id}`)
      .then(() => {
        setUpdate(update+1);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [update]);

  return (
    <div className="grid grid-cols-3 gap-4 w-full mt-3 p-3">
      {notes.length > 0 &&
        notes.map((not) => (
          <div
            key={not._id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="font-bold text-lg">{not.title}</h2>
            <p className="mt-2">{not.note}</p>

            <div className="flex gap-2">
            <Link to={`/edit/${not._id}`}>   
              <button className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-700 mt-3">
                Edit
              </button></Link>
                     
             <button onClick={()=>handleDelete(not._id)} className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-700 mt-3">
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
