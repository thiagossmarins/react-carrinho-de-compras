const fetchProducts = async (query) => {
    const reponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await reponse.json();
    return data.results;
}

export default fetchProducts