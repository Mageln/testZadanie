import { Box, Container } from "@mui/material";
import { Header } from "../../components/header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useState } from "react";
import Affairs from "../../components/Affairs/Affairs";
import { Tablist } from "../../components/TabList/Tablist";

function App() {
  const [activeTab, setActiveTab] = useState("current");

  const todoList = useSelector((state: RootState) => state.todos) || {todos: [], trash:[]};

  const currentCount = todoList.todos.filter((todo) => !todo.completed).length;
  const allCount = todoList.todos.length;
  const doneCount = todoList.todos.filter((todo) => todo.completed).length;
  const trashCount = todoList.trash.length;

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 100,
          background: "#8c868f",
          borderRadius: 10,
          marginTop:1
        }}
      >
        <Header />
      </Box>
      <Box sx={{
           background:"#8c868f",
           borderRadius: 10,
           color:"white",
      }}>

      <Tablist
        currentCount={currentCount}
        doneCount={doneCount}
        allCount={allCount}
        activeTab={activeTab}
        trashCount={trashCount}
        setActiveTab={setActiveTab}
      />

{activeTab === "current" && (
        <Affairs todoList={todoList.todos.filter((todo) => !todo.completed)} />
      )}
      {activeTab === "all" && <Affairs todoList={todoList.todos} />}
      {activeTab === "done" && (
        <Affairs todoList={todoList.todos.filter((todo) => todo.completed)} />
      )}
      {activeTab === "trash" && <Affairs isTrash={true} todoList={todoList.trash} />}
      </Box>
    </Container>
  );
}

export default App;
