import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addToCart, incrementCart } from '../actions/cart';

const StoreWrapper = styled.div`
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;

  li {
    flex: 0 0 30%;
    margin-bottom: 30px;

    .name {
      font-size: 22px;
      font-weight: bold;
    }

    .price {
      font-size: 14px;
      font-weight: bold;
    }

    button {
      border: 1px solid #000000;
      background: transparent;
      cursor: pointer;
    }
  }
}
`;

function Store({ products, cart, addToCart, incrementCart }) {
  const handleClick = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    const { price, name } = product;

    if (Object.keys(cart.cart).includes(id.toString())) {
      incrementCart({ id });
    } else {
      addToCart({ id, price, name });
    }
  };

  return (
    <StoreWrapper>
      <ul>
        {products.length && products.map((product, index) =>
          <li key={index}>
            <p className="name">{product.name}</p>
            <p className="price">$ {product.price}</p>
            <button onClick={() => handleClick(product.id)}>{
              Object.keys(cart.cart).includes(product.id.toString()) ?
                "More" : "Add"
            }</button>
          </li>
        )}
      </ul>
    </StoreWrapper>
  )
}

Store.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  incrementCart: PropTypes.func.isRequired,
}

function mapStateToProps({ products, cart }) {
  return {
    products: (products?.products?.length) ?
      products.products :
      [],
    cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    incrementCart: (product) => dispatch(incrementCart(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
