import { useNavigate } from "react-router-dom";
import axios from "axios"

export const Content = () => {

const navigate=useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const note = e.target.note.value;
axios.post("http://localhost:3001/addnotes",{title,note}).then(()=>{
navigate("/");  
}).catch(()=>{
  console.log("not ADD")
})
   
  }

  return (
    <div className="w-full  h-screen text-center my-7 flex flex-col items-center ">
         
        <form
        onSubmit={(e)=>handleSubmit(e)}
          className=" my-8 w-80 flex flex-col justify-center items-center"
    
        >
          <div>
            <label
              htmlFor="title"
              className=" text-lg font-bold  leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                id="title"
                name="title"
                type="text"
                placeholder=""
                required
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="note"
                className=" text-lg font-bold  leading-6 text-gray-900"
              >
                Note
              </label>
              <textarea
                id="note"
                name="note"
                type="text"
                placeholder=""
                required
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
         {/* <Link to="/"> */}
         <button className="bg-blue-500 rounded-lg px-4 py-2 my-4 text-white font-bold w-16 hover:scale-105 ">
            Save
          </button>
         {/* </Link> */}
        </form>
     
    </div>
  );
};
