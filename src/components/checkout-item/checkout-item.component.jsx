import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <div className='checkout-item '>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span className='arrow-left' onClick={() => removeItem(cartItem)}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow-right' onClick={() => addItem(cartItem)}>&#10095;</span>
      </div>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
