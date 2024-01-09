import React, { useContext } from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import propTypes from 'prop-types'
import './ProductCard.css'
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

const ProductCard = ({ data }) => {
    const { title, thumbnail, price } = data;
    const { cartItems, setCartItems } = useContext(AppContext)

    const handleAddCart = () => setCartItems([ ...cartItems, data ]);

    return (
        <section className='product-card'>
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className='card-image' />
            <div className='card-info'>
                <h2 className='card-price'>{formatCurrency(price, 'BRL')}</h2>
                <h2 className='card-title'>{title}</h2>
            </div>

            <button type='button' className='button-add-cart' onClick={ handleAddCart }>
                <BsCartPlusFill />
            </button>
        </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;