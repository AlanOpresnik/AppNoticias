import { Grid, Typography, Pagination, Stack } from "@mui/material";

import useNoticias from "../hooks/useNoticias";
import Noticia from "./noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas =  Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Ultimas noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack sx={{
        marginY: 5,
      }} spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <Pagination page={pagina} onChange={handleChangePagina} count={totalPaginas} color="primary" />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
