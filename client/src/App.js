import React from "react";
import { Container, Grow, Grid, Typography, AppBar } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "../src/Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./styles";
import { getPosts } from "./redux/actions/posts";
import { connect } from "react-redux";

const App = ({ getPosts }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height={60}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(null, mapDispatchToProps)(App);
