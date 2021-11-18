import React from 'react'
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItems } from '../TodoItems';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodo } from "../EmptyTodo";
import {Modal} from '../Modal';



function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo, 
    deleteTodo, 
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo,
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader>
      <TodoCounter 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      </TodoHeader>  

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={()=><TodosError/>}
        onLoading={()=><TodoLoading/>}
        onEmptyTodos={()=><EmptyTodo/>}
        render={todo=>(
          <TodoItems 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
        )}
        
      />
    
     {/* <TodoList>
      {error && <TodosError error={error}/>}
      {loading && <TodoLoading/>}
      {(!loading && !searchedTodos.length) && <EmptyTodo/>}

      {searchedTodos.map(todo=>(
        <TodoItems 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={()=>completeTodo(todo.text)}
        onDelete={()=>deleteTodo(todo.text)}
        />
      ))}
    </TodoList> */}

    {!!openModal &&(
      <Modal>
      <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
    </Modal>
    )}
    
    <CreateTodoButton
    setOpenModal={setOpenModal}

    />
    </React.Fragment>);
}

export default App;
