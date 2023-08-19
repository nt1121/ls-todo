import { useContext, memo } from "react";
import { StoreContext } from "./providers/StoreProvider";

export const TodoExportButton = memo(() => {
    const { todos } = useContext(StoreContext);
    const handleClick = (e) => {
        const blob = new Blob([JSON.stringify(todos)], { type: "text/plain" });
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, "ls_todo.txt");            
        } else {
            e.target.href = window.URL.createObjectURL(blob);
        }
    };

    return <a id="js-download" href="#" download="ls_todo.txt" className="c-button" onClick={handleClick}>エクスポート</a>;
});
