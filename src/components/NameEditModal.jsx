import { memo, useContext } from "react";
import { StoreContext } from "./providers/StoreProvider";
import { validateTodoName, saveTodosToLocalStorage } from "../helpers";

export const NameEditModal = memo(() => {
    const { todos, setTodos, editTodoId, editTodoNewName, setEditTodoNewName, isNameEditModalVisible, setIsNameEditModalVisible } = useContext(StoreContext);
    const changeTodoName = () => {
        const trimmedNewName = editTodoNewName.trim();
        const error = validateTodoName(trimmedNewName);
        if (error.length) {
            alert(error);
            return;
        }
        const newTodos = todos.map((todo) => {
            if (todo.id === editTodoId) {
                return { ...todo, name: trimmedNewName };
            }
            return todo;
        });
        saveTodosToLocalStorage(newTodos);
        setTodos(newTodos);
        setIsNameEditModalVisible(false);
    };
    const template = (
        <div className="p-name-edit-modal">
            <div className="p-name-edit-modal__window">
                <div className="p-name-edit-modal__window-heading">タスク名の編集</div>
                <input
                    type="text"
                    className="p-name-edit-modal__window-input-text"
                    value={editTodoNewName}
                    onChange={(e) => setEditTodoNewName(e.target.value)}
                    maxLength="100"
                />
                <div>
                    <button className="c-button c-button--primary u-mr-10" onClick={changeTodoName}>変更</button>
                    <button className="c-button" onClick={() => setIsNameEditModalVisible(false)}>キャンセル</button>
                </div>
            </div>
        </div>
    );

    return isNameEditModalVisible ? template : null;
});
