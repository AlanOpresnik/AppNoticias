import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            height="250px"
            component="img"
            image={urlToImage}
            alt={title}
          />
        )}
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>

          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          </CardContent>

          <CardActions>
            <Link
              href={url}
              target="_blank"
              variant="button"
              textAlign={'center'}
              sx={{
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Leer más
            </Link>
          </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
