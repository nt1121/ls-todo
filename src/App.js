function App() {
  return (
    <div className="p-wrapper">

      <header className="p-header">
        <div className="p-header__inner">
          <h1 className="p-header__inner-logo">LS TODO</h1>
          <button type="button" className="c-button c-button--primary p-header__inner-manual-button">使い方</button>
        </div>
      </header>

      <main className="p-main">
        <div className="p-main__inner">

          <div className="p-import-export">
            <label htmlFor="import-button" className="c-button u-mr-10">
              <input id="import-button" type="file" style={{ display: 'none' }} />インポート
            </label>
            <button type="button" className="c-button">エクスポート</button>
          </div>

          <form className="p-todo-add-form">
            <input type="text" name="new_todo_name" className="p-todo-add-form__input-text" />
              <button className="c-button c-button--primary p-todo-add-form__add-button">追加</button>
          </form>

          <div className="p-is-completed-heading">未完了</div>

          <div className="p-todo">
            <div className="p-todo__left">
              <input type="checkbox" id="todo-0-checkbox" className="p-todo__left-checkbox" />
                <label htmlFor="todo-0-checkbox" className="p-todo__left-checkbox-label"></label>
            </div>
            <div className="p-todo__right">
              <div className="p-todo__right-text">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div className="p-todo__right-button-wrapper">
                <button type="button" className="c-button c-button--primary u-mr-10">編集</button>
                <button type="button" className="c-button c-button--danger">削除</button>
              </div>
            </div>
          </div>

          <div className="p-todo">
            <div className="p-todo__left">
              <input type="checkbox" id="todo-1-checkbox" className="p-todo__left-checkbox" />
                <label htmlFor="todo-1-checkbox" className="p-todo__left-checkbox-label"></label>
            </div>
            <div className="p-todo__right">
              <div className="p-todo__right-text">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div className="p-todo__right-button-wrapper">
                <button type="button" className="c-button c-button--primary u-mr-10">編集</button>
                <button type="button" className="c-button c-button--danger">削除</button>
              </div>
            </div>
          </div>

          <div className="p-todo">
            <div className="p-todo__left">
              <input type="checkbox" id="todo-2-checkbox" className="p-todo__left-checkbox" />
                <label htmlFor="todo-2-checkbox" className="p-todo__left-checkbox-label"></label>
            </div>
            <div className="p-todo__right">
              <div className="p-todo__right-text">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div className="p-todo__right-button-wrapper">
                <button type="button" className="c-button c-button--primary u-mr-10">編集</button>
                <button type="button" className="c-button c-button--danger">削除</button>
              </div>
            </div>
          </div>

          <div className="p-is-completed-heading">完了</div>

          <div className="p-todo p-todo--completed">
            <div className="p-todo__left">
              <input type="checkbox" id="todo-3-checkbox" className="p-todo__left-checkbox" />
                <label htmlFor="todo-3-checkbox" className="p-todo__left-checkbox-label"></label>
            </div>
            <div className="p-todo__right">
              <div className="p-todo__right-text">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div className="p-todo__right-button-wrapper">
                <button type="button" className="c-button c-button--primary u-mr-10">編集</button>
                <button type="button" className="c-button c-button--danger">削除</button>
              </div>
            </div>
          </div>

          <div className="p-todo p-todo--completed">
            <div className="p-todo__left">
              <input type="checkbox" id="todo-4-checkbox" className="p-todo__left-checkbox" />
                <label htmlFor="todo-4-checkbox" className="p-todo__left-checkbox-label"></label>
            </div>
            <div className="p-todo__right">
              <div className="p-todo__right-text">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div className="p-todo__right-button-wrapper">
                <button type="button" className="c-button c-button--primary u-mr-10">編集</button>
                <button type="button" className="c-button c-button--danger">削除</button>
              </div>
            </div>
          </div>

          <div className="p-todo p-todo--completed">
            <div className="p-todo__left">
              <input type="checkbox" id="todo-5-checkbox" className="p-todo__left-checkbox" />
                <label htmlFor="todo-5-checkbox" className="p-todo__left-checkbox-label"></label>
            </div>
            <div className="p-todo__right">
              <div className="p-todo__right-text">
                あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
              </div>
              <div className="p-todo__right-button-wrapper">
                <button type="button" className="c-button c-button--primary u-mr-10">編集</button>
                <button type="button" className="c-button c-button--danger">削除</button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="p-footer">
        &copy; 2023 nt1121
      </footer>

      <div className="p-how-to-use-modal" style={{ display: 'none' }}>
        <div className="p-how-to-use-modal__window">
          <div className="u-mb-10">
          </div>
          <div>
            <button className="c-button">閉じる</button>
          </div>
        </div>
      </div>

      <div className="p-name-edit-modal" style={{ display: 'none' }}>
        <div className="p-name-edit-modal__window">
          <input type="text" className="p-name-edit-modal__window-input-text" />
            <div>
              <button className="c-button c-button--primary u-mr-10">変更</button>
              <button className="c-button">キャンセル</button>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
