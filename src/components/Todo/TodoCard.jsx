import React, { useState } from "react";
import {
  getTodos,
  removeSingleTodo,
  updatedTodosDB,
} from "../../utilites/fakedb";
import { MdEdit } from "react-icons/md";
import { IoCheckboxOutline, IoCheckmark, IoTrashBin } from "react-icons/io5";
import toast from "react-hot-toast";

export default function TodoCard({ todo, setTodos }) {
  const [edit, setEdit] = useState(false);
  const textRef = React.createRef();
  const deleteSingleTodo = (id) => {
    removeSingleTodo(id);
    const storedTodos = getTodos();
    setTodos(storedTodos);
    toast.success("Todo Deleted Successfully!");
  };
  const handleStatusChange = (e, id) => {
    const storedTodos = getTodos();
    const updatedTodos = storedTodos.map((todo) => {
      if (todo.id === id) {
        todo.completed = e.target.checked;
      }
      return todo;
    });
    setTodos(updatedTodos);
    updatedTodosDB(updatedTodos);
    toast.success("Todo Status Changed Successfully!");
  };
    const handleEditSave = (todo) => {
    const storedTodos = getTodos();
    const updatedTodos = storedTodos.map((item) => {
      if (item.id === todo.id) {
        item.text = textRef.current.innerText;
      }
      return item;
    });
    setTodos(updatedTodos);
    updatedTodosDB(updatedTodos);
    setEdit(false);
    toast.success("Todo Updated Successfully!");
    }
  return (
    <li
      key={todo.id}
      className="bg-white shadow-md rounded px-8 pt-4 pb-6 mb-4 flex items-center gap-3"
    >
      <div className="flex items-center gap-3 justify-between w-full">
        <div className="flex items-center gap-4">
          <input
            className="checkbox checkbox-accent"
            type="checkbox"
            name="todo"
            id="todo"
            defaultChecked={todo.completed}
            onChange={(e) => {
              handleStatusChange(e, todo.id);
            }}
          />

          <p
            ref={textRef}
            className={`${
              todo.completed ? "line-through text-red-600" : ""
            } text-gray-800 max-w-full overflow-hidden p-2`}
            contentEditable={edit}
            suppressContentEditableWarning={true}
          >
            {todo.text}
          </p>
        </div>
        {edit ? (
          <IoCheckmark
            className="text-success font-bold text-3xl cursor-pointer"
            onClick={() => handleEditSave(todo)}
          />
        ) : (
          <div className="flex flex-col gap-2 text-lg items-center justify-center">
            <MdEdit
              className="text-info cursor-pointer"
              onClick={() => setEdit(true)}
            />
            <IoTrashBin
              onClick={() => {
                deleteSingleTodo(todo.id);
              }}
              title="Delete Todo"
              className=" text-error cursor-pointer"
            />
          </div>
        )}
      </div>
    </li>
  );
}
