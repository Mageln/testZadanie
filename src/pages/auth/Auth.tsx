import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IFormData } from "../../models/IFormData";

const Auth = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormData>();
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = (data: IFormData) => {
    const { username, password } = data;

    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home"); 
    } else {
      setLoginError("Неверный логин или пароль");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Вход
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Логин"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("username", { required: "Логин обязателен" })}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ""}
        />
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("password", { required: "Пароль обязателен" })}
          error={!!errors.password || !!loginError}
          helperText={errors.password ? errors.password.message : loginError}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Войти
        </Button>
      </form>
    </Container>
  );
};

export default Auth;