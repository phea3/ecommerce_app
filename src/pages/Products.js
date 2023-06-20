import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import axios from "axios";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Products() {
  const [post, setPost] = React.useState(null);
  const [product, setProduct] = React.useState(null);

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  const url = "https://fakestoreapi.com/products/";

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {product?.map((value,index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={value.image} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                      rate: {value.rating.rate} ⭐ count: {value.rating.count}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                       {value.title}
                      </Typography>
                      <ReactReadMoreReadLess
                          charLimit={100}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          ellipsis=" ..."
                      >
                          {value.description}
                      </ReactReadMoreReadLess>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        {value.category}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="div" sx={{fontWeight: 'bold'}}>
                      ${value.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Products