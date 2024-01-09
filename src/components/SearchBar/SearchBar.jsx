import React, { useStat, useContext } from 'react'
import { LuSearch } from "react-icons/lu";
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

const SearchBar = () => {
    const { setProducts, setLoading } = useContext(AppContext)
    const [searchValue, setSearchValue] = React.useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        const products = await fetchProducts(searchValue);

        setProducts(products);
        setLoading(false);
        setSearchValue('');
    }

    return (
        <form className='search-bar' onSubmit={handleSearch} >
            <input type="search" value={searchValue} placeholder='Buscar produtos' className='search-input' onChange={ ({ target }) => setSearchValue(target.value) } required />
            <button type='submit' className='search-button'>
                <LuSearch />
            </button>
        </form>
    )
}

export default SearchBar