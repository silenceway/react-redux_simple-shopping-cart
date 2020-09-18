import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const HeaderWrapper = styled.div`
align: center;
display: flex;
justify-content: space-between;

.title {
  font-size: 36px;
}

ul {
  list-style-type: none;
}

a {
  color: #666666;
  margin-left: 10px;
  text-decoration: none;

  &.active,
  &:hover{
    color: #000000;
    text-decoration: underline;
  }
}
`;

function Header({ cart }) {
  return (
    <HeaderWrapper>
      <div className="title">My Store</div>
      <nav>
        <ul>
          <li>
            <NavLink exact={true} activeClassName='active' to="/">Home</NavLink>
            <NavLink activeClassName='active' to="/about">About</NavLink>
            <NavLink activeClassName='active' to="/cart">Cart ({cart.count})</NavLink>
          </li>
        </ul>
      </nav>

    </HeaderWrapper>
  )
}

Header.propTypes = {
  cart: PropTypes.object.isRequired,
}

function mapStateToProps({ products, cart }) {
  return {
    cart,
  }
}

export default connect(mapStateToProps)(Header);
