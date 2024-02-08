import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { deleteAllTodos, getTodos } from "../../utilites/fakedb";
import toast from "react-hot-toast";
import { MdPendingActions } from "react-icons/md";

export default function ExtraFunctionTodo({ todos, setTodos }) {
  const deleteAll = () => {
    deleteAllTodos();
    setTodos([]);
    toast.success("All Todos Deleted Successfully!");
  };
  const handleStatusFilter = (status) => {
    const storedTodos = getTodos();
    if (status === "all") {
      setTodos(storedTodos);
    } else if (status === "completed") {
      const completedTodos = storedTodos.filter((todo) => todo.completed);
      setTodos(completedTodos);
    } else if (status === "incomplete") {
      const incompletedTodos = storedTodos.filter((todo) => !todo.completed);
      setTodos(incompletedTodos);
    }
  }
  return (
    <div className="shadow-md px-5 py-2 relative">
      <MdPendingActions className="text-2xl text-orange-500 absolute -top-2 -left-1" />
      <div className="flex items-center justify-between gap-3 ml-3">
        <button
          onClick={() => deleteAll()}
          className="btn btn-error btn-outline btn-sm"
        >
          Delete All
          <RiDeleteBin3Line />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <label
              className="flex items-center text-xs font-bold gap-1"
              htmlFor="completed-all"
            >
              <input
                id="completed-all"
                type="radio"
                name="completed"
                className=" radio radio-xs radio-accent"
                value="all"
                onClick={() => {
                  handleStatusFilter("all");
                }}
              />
              All
            </label>
            <label
              className="flex items-center text-xs  font-bold gap-1"
              htmlFor="completed-completed"
            >
              <input
                id="completed-completed"
                type="radio"
                name="completed"
                className=" radio radio-xs radio-accent"
                value="completed"
                onClick={() => {
                  handleStatusFilter("completed");
                }}
              />
              Completed
            </label>
            <label
              className="flex text-xs items-center font-bold gap-1"
              htmlFor="completed-incomplete"
            >
              <input
                id="completed-incomplete"
                type="radio"
                name="completed"
                className=" radio radio-xs radio-accent"
                value="incomplete"
                onClick={() => {
                  handleStatusFilter("incomplete");
                }}
              />
              Incomplete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
