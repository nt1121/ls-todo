import { memo, useContext } from "react";
import { Todo } from "./components/Todo";
import { TodoAddForm } from "./components/TodoAddForm";
import { NameEditModal } from "./components/NameEditModal";
import { TodoExportButton } from "./components/TodoExportButton";
import { TodoImportButton } from "./components/TodoImportButton";
import { HowToUseModal } from "./components/HotToUseModal";
import { StoreContext } from "./components/providers/StoreProvider";

export const App = memo(() => {
  const { todos, setIsHowToUseModalVisible } = useContext(StoreContext);
  const incompleteTodoList = todos.filter((todo) => !todo.isCompleted).map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      isCompleted={todo.isCompleted}
      key={todo.id}
    />
  ));
  const completedTodoList = todos.filter((todo) => todo.isCompleted).map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      isCompleted={todo.isCompleted}
      key={todo.id}
    />
  ));

  return (
    <div className="p-wrapper">
      <header className="p-header">
        <div className="p-header__inner">
          <h1 className="p-header__inner-logo">LS TODO</h1>
          <button
            type="button"
            className="c-button c-button--primary p-header__inner-manual-button"
            onClick={() => setIsHowToUseModalVisible(true)}
          >
            使い方
          </button>
        </div>
      </header>
      <main className="p-main">
        <div className="p-main__inner">
          <div className="p-import-export">
            <TodoImportButton />
            <TodoExportButton />
          </div>
          <TodoAddForm />
          <div className="p-is-completed-heading">未完了（{incompleteTodoList.length}件）</div>
          <ul>
            {incompleteTodoList}
          </ul>
          <div className="p-is-completed-heading">完了（{completedTodoList.length}件）</div>
          <ul>
            {completedTodoList}
          </ul>
        </div>
      </main>
      <footer className="p-footer">
        &copy; 2023 nt1121
      </footer>
      <HowToUseModal />
      <NameEditModal />
    </div>
  );
});
