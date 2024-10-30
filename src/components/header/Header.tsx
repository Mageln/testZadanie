import { Box, Button, TextField } from "@mui/material";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { addTodo, clearTodo } from "../../state/todoSlice";
import { useCallback, useState } from "react";
import { MenuIcon, Plus } from "lucide-react";

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [todoDescription, setTodoDescription] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleAddTodo = useCallback(() => {
    if(todoDescription.trim()){
      dispatch(addTodo(todoDescription));
      setTodoDescription("")
    }
  },[dispatch, todoDescription])

  const handleKeyDown = useCallback((e:React.KeyboardEvent) => {
    if(e.key === "Enter"){
      handleAddTodo()
    }
  },[handleAddTodo])

  return (
    <Box style={{ display: "flex", }}>
      <Button
        sx={{
          marginRight: 20,
        }}
        startIcon={<Plus 
            style={{transform: hovered ? "rotate(12deg)" : " rotate(0deg)",
            transition: "transform 0.3s ease" }} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        size="medium"
        color="primary"
        variant="contained"
        onClick={handleAddTodo}
      >
      
        Добавить
      </Button>
      <TextField
        sx={{ width: 160, '& .MuiInputLabel-root': { color: 'white' }, '& .MuiInputLabel-root.Mui-focused': { color: 'white' } }}
        variant="standard"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        label=" Пополните список..."
        fullWidth
        onKeyDown={handleKeyDown}
      />

      <Button
        sx={{
          marginLeft: 20,
        }}
        variant="contained"
        size="medium"
        color="error"
        endIcon={
        <MenuIcon style={{transform: hovered ? "rotate(0deg)" : "rotate(12deg)",
            transition: "transform 0.3s ease" }} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        onClick={() => {
          dispatch(clearTodo());
        }}
      >
        Очистить
      </Button>
    </Box>
  );
};
