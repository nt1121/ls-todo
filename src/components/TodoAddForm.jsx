import { useState, memo, useContext } from "react";
import { StoreContext } from "./providers/StoreProvider";
import { validateTodoName } from "../helpers";
import { nanoid } from "nanoid";
import { saveTodosToLocalStorage } from "../helpers";

export const TodoAddForm = memo(() => {
    const { todos, setTodos } = useContext(StoreContext);
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todos.length >= 100) {
            alert('登録できるタスクは100件までです。');
            return;
        }
        const trimmedName = name.trim();
        const error = validateTodoName(trimmedName);
        if (error.length) {
            alert(error);
            return;
        }
        const newTodo = { id: nanoid(), name: trimmedName, isCompleted: false };
        const newTodos = [newTodo, ...todos];
        saveTodosToLocalStorage(newTodos);
        setTodos(newTodos);
        setName("");
    };

    return (
        <form className="p-todo-add-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="p-todo-add-form__input-text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="100"
            />
            <button className="c-button c-button--primary p-todo-add-form__add-button">追加</button>
        </form>
    );
});
