import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const isEmpty = !cart.line_items.length;
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart. Try adding some!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            type="button"
            className={classes.emptyButton}
            size="large"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            type="button"
            className={classes.checkoutButton}
            size="large"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
