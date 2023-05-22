import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div style={{
        displey: "flex",
        width: "35px",
        justifyContent: "space-between",
        alignItems: "center"
    }}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>10</span>
    </div>
  )
}

export default CartWidget