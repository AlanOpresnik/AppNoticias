import { Container, Grid, Typography } from "@mui/material";
import { NoticiasProvider } from "./context/noticiasProvider";
import Formulario from "./components/formulario";
import ListadoNoticias from "./components/listadoNoticias";
function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Buscador de noticias
          </Typography>
        </header>
        <Grid
        container
        direction="row"
        justifyContent='center'
        alignItems='center'
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />
      </Container>
      </NoticiasProvider>
  );
}

export default App;
