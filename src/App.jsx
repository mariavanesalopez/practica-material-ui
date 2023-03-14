import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const disparaAlerta = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Your work has been saved",
      showConfirmButton: true, //muestra un boton, puede estar en false si uso timer.
      timer: 1500, //si quiero que desaparezca en se milisegundos
    });
  };
  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",

          padding: "10px 30px",
          backgroundColor: {
            xs: "#F8BBD0",
            md: "#0693e3",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="ingresa tu nombre" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="ingresa tu email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="primary" />
                      ) : (
                        <Visibility color="primary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Stack spacing={2} sx={{ m: 1 }} direction="row">
          <Button variant="contained" onClick={disparaAlerta}>
            Ingresar
          </Button>
          <Button variant="outlined" startIcon={<Visibility color="primary" />}>
            Cancelar
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
