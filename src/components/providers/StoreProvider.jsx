import { createContext, useState } from "react";

export const StoreContext = createContext({});

export const StoreProvider = props => {
    const [todos, setTodos] = useState(props.todos);
    const [isNameEditModalVisible, setIsNameEditModalVisible] = useState(false);
    const [isHowToUseModalVisible, setIsHowToUseModalVisible] = useState(false);
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoNewName, setEditTodoNewName] = useState("");

    return (
        <StoreContext.Provider value={{ 
            todos, 
            setTodos, 
            isNameEditModalVisible, 
            setIsNameEditModalVisible,
            isHowToUseModalVisible,
            setIsHowToUseModalVisible,
            editTodoId,
            setEditTodoId,
            editTodoNewName,
            setEditTodoNewName
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};
