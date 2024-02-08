import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiHealthBookFill } from "react-icons/ri";
export default function AddTodo() {
        

  return (
    <div>
      {/* create a todo input design */}
      <div className="w-full max-w-md mx-auto my-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center gap-3">
           
            <RiHealthBookFill className="text-6xl text-accent" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="todo"
              type="text"
              name="todo"
              placeholder="TYPE YOUR TODO HERE..."
            />
          
            <button title="Add Todo"
              className="btn btn-sm btn-outline text-2xl text-white btn-accent"
              type="button"
            >
              <IoAddCircleOutline />
            </button>

        </form>
      </div>
    </div>
  );
}
