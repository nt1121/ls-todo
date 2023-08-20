import { useContext, memo } from "react";
import { StoreContext } from "./providers/StoreProvider";

export const HowToUseModal = memo(() => {
    const { isHowToUseModalVisible, setIsHowToUseModalVisible } = useContext(StoreContext);
    const template = (
        <div className="p-how-to-use-modal">
            <div className="p-how-to-use-modal__window">
                <div className="p-how-to-use-modal__window-heading">使い方</div>
                <div className="p-how-to-use-modal__window-text">
                    <p className="u-mb-10">タスクの追加、タスクの完了と未完了状態の更新、タスク名の編集、タスクの削除が行えるTODOリストです。</p>
                    <p className="u-mb-10">変更はブラウザのローカルストレージに自動的に保存されます。</p>
                    <p className="u-mb-10">別の端末やブラウザでTODOリストを読み込みたい場合は、「エクスポート」ボタンを押してダウンロードしたJSON形式のテキストファイルを別の端末やブラウザで「インポート」ボタンを押して読み込んでください。</p>
                    <p>インポートをした場合、ローカルストレージに保存されているTODOリストもインポートしたTODOリストに置き換えられます。</p>
                </div>
                <div>
                    <button className="c-button p-how-to-use-modal__window-close-button" onClick={() => setIsHowToUseModalVisible(false)}>閉じる</button>
                </div>
            </div>
        </div>
    );

    return isHowToUseModalVisible ? template : null;
});
