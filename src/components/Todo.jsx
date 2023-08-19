import { memo, useContext } from "react";
import { StoreContext } from "./providers/StoreProvider";
import { saveTodosToLocalStorage } from "../helpers";

export const Todo = memo((props) => {
    const { todos, setTodos, setEditTodoId, setEditTodoNewName, setIsNameEditModalVisible } = useContext(StoreContext);
    const toggleIsCompleted = () => {
        const newTodos = todos.map((todo) => {
            if (todo.id === props.id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        saveTodosToLocalStorage(newTodos);
        setTodos(newTodos);
    };
    const deleteTodo = () => {
        if (!window.confirm("タスクを削除してもよろしいですか？")) {
            return;
        }
        const newTodos = todos.filter((todo) => todo.id !== props.id);
        saveTodosToLocalStorage(newTodos);
        setTodos(newTodos);
    };
    const showNameEditModal = () => {
        setEditTodoId(props.id);
        setEditTodoNewName(props.name);
        setIsNameEditModalVisible(true);
    };

    return (
        <li className={props.isCompleted ? 'p-todo p-todo--completed' : 'p-todo'}>
            <div className="p-todo__left">
                <input
                    type="checkbox"
                    id={`todo-${props.id}-checkbox`}
                    className="p-todo__left-checkbox"
                    defaultChecked={props.isCompleted}
                    onChange={toggleIsCompleted}
                />
                <label htmlFor={`todo-${props.id}-checkbox`} className="p-todo__left-checkbox-label"></label>
            </div>
            <div className="p-todo__right">
                <div className="p-todo__right-text">
                    {props.name}
                </div>
                <div className="p-todo__right-button-wrapper">
                    <button
                        type="button"
                        className="c-button c-button--primary u-mr-10"
                        onClick={showNameEditModal}
                    >
                        編集
                    </button>
                    <button
                        type="button"
                        className="c-button c-button--danger"
                        onClick={deleteTodo}
                    >
                        削除
                    </button>
                </div>
            </div>
        </li>
    );
});
