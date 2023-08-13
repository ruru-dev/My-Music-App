import { TextField, Button } from "@mui/material";

export default function LoginForm({ setLoggedIn }) {
  function handleSubmit(e) {
    e.preventDefault();
    setLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <TextField required label="Username" variant="standard" />
      <TextField required label="Password" variant="standard" />
      <div className="login-button">
        <Button type="submit" variant="contained">
          Login
        </Button>
      </div>
    </form>
  );
}
