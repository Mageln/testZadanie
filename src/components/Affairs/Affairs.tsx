import {
    Box,
    Button,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { ArchiveRestore, Check, Trash } from "lucide-react";
  import { useDispatch } from "react-redux";
  import { AppDispatch } from "../../state/store";
  import { removeTodo, setTodoStatus, restoreTodo } from "../../state/todoSlice";
  import { IAffairsProps } from "../../models/Todo";
  
  export default function Affairs({ todoList, isTrash }: IAffairsProps) {
    const dispatch = useDispatch<AppDispatch>();


    
  
    return (
      <Container maxWidth="lg">
        <List>
          {todoList.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText
                style={{
                  paddingLeft: 20,
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid white",
                  borderRadius: "20px 0px",
                  height: 50,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">{todo.description}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {isTrash ? (
                      <IconButton
                        onClick={() => {
                          dispatch(restoreTodo(todo.id));
                        }}
                      >
                        <ArchiveRestore />
                      </IconButton>
                    ) : (
                      <>
                        <IconButton
                          onClick={() => {
                            dispatch(removeTodo(todo.id));
                          }}
                        >
                          <Trash />
                        </IconButton>
                        <Button
                        onClick={() => {
                          dispatch(
                            setTodoStatus({
                              completed: !todo.completed,
                              id: todo.id,
                            })
                          );
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: todo.completed ? 'green' : 'inherit',
                          background: 'none',
                          border: 'none', 
                          padding: 0, 
                          cursor: 'pointer', 
                        }}
                      >
                        {todo.completed && <Check style={{ marginRight: 8 }} />} {/* Иконка, если задача завершена */}
            
                      </Button>
                      </>
                    )}
                  </Box>
                </Box>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }