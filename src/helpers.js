export const validateTodoName = (name) => {
    if (name.length === 0) {
        return "タスク名を入力してください。";
    }

    if (name.length > 100) {
        return "タスク名は100文字以内で入力してください。";
    }

    return "";
};

export const convertTodosJsonToArray = (json) => {
    if (typeof json !== "string") {
        return false;
    }

    let todos = null;

    try {
        todos = JSON.parse(json);
    } catch (error) {
        return false;
    }

    if (!Array.isArray(todos)) {
        return false;
    }

    for (const todo of todos) {
        if (typeof todo !== "object") {
            return false;
        }

        const keys = Object.keys(todo);

        if (keys.length !== 3) {
            return false;
        }

        if (
            typeof todo.id !== "string" ||
            todo.id.length === 0 ||
            todo.id.length > 100 ||
            typeof todo.name !== "string" ||
            todo.name.length === 0 ||
            todo.name.length > 100 ||
            typeof todo.isCompleted !== "boolean"
        ) {
            return false;
        }
    }

    return todos;
};

export const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}
