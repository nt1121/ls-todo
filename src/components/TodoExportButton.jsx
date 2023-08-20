import { useContext, memo } from "react";
import { StoreContext } from "./providers/StoreProvider";

export const TodoExportButton = memo(() => {
    const { todos } = useContext(StoreContext);
    const handleClick = (e) => {
        const dt = new Date();
        const year = dt.getFullYear();
        const month = ("0" + (dt.getMonth() + 1)).slice(-2);
        const day = ("0" + dt.getDate()).slice(-2);
        const hour = ("0" + dt.getHours()).slice(-2);
        const minute = ("0" + dt.getMinutes()).slice(-2);
        const second = ("0" + dt.getSeconds()).slice(-2);
        const fileName = `ls_todo_${year}${month}${day}${hour}${minute}${second}.txt`;
        e.target.download = fileName;

        const blob = new Blob([JSON.stringify(todos)], { type: "text/plain" });
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);            
        } else {
            e.target.href = window.URL.createObjectURL(blob);
        }
    };

    return <a id="js-download" href="#" download="ls_todo.txt" className="c-button" onClick={handleClick}>エクスポート</a>;
});
