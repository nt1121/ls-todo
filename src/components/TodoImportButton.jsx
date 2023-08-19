import { useContext, memo } from "react";
import { StoreContext } from "./providers/StoreProvider";
import { convertTodosJsonToArray, saveTodosToLocalStorage } from "../helpers";

export const TodoImportButton = memo(() => {
    const { setTodos } = useContext(StoreContext);
    const handleChange = (e) => {
        const fileReader = new FileReader();
        const importButton = e.target;
        fileReader.addEventListener('load', (e) => {
            const todos = convertTodosJsonToArray(e.target.result);
            if (!todos) {
                alert("インポート可能な形式のファイルではありません。");
                return;
            }
            saveTodosToLocalStorage(todos);
            setTodos(todos);
            // ファイルの選択を解除する
            importButton.value = '';
        });
        fileReader.readAsText(e.target.files[0]);
    };

    return (
        <label htmlFor="import-button" className="c-button u-mr-10">
            <input id="import-button" type="file" style={{ display: 'none' }} onChange={handleChange} />インポート
        </label>
    );
});
