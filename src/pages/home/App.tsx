import { Box, Container } from "@mui/material";
import { Header } from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useEffect, useState } from "react";
import Affairs from "../../components/Affairs/Affairs";
import { Tablist } from "../../components/TabList/Tablist";
import { checkAuth } from "../../state/authSlice";
import Auth from "../auth/Auth";
import { Navigate } from "react-router-dom";

function App() {
  const dispath = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [activeTab, setActiveTab] = useState("current");

  
  
  const todoList = useSelector((state: RootState) => state.todos) || {todos: [], trash:[]};
  const currentCount = todoList.todos.filter((todo) => !todo.completed).length;
  const allCount = todoList.todos.length;
  const doneCount = todoList.todos.filter((todo) => todo.completed).length;
  const trashCount = todoList.trash.length;
  
  
  useEffect(() => {
    dispath(checkAuth())
  },[dispath])

  if (!isAuthenticated) {
    return <Navigate to="/"/>
  }

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
