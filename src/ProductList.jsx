import React, { useState, useEffect } from 'react';
import SortedProductList from './SortedProductList';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortByRating, setSortByRating] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
  }, []);

  const toggleSort = () => {
    setSortByRating(!sortByRating);
  };
return (
    <main>
      <h1>Catalogo de productos</h1>
      <button className="btn btn-warning" onClick={toggleSort}>
        {sortByRating ? 'Ordenar por nombre' : 'Ordenar por Rating'}
      </button>
      <br></br>
      <br></br>
      <div className="row">
        {sortByRating ? (
          <SortedProductList products={products} />
        ) : (
          products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4"> {}
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} style={{ maxWidth: '50%', height: 'auto' }} /> {
}
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Precio: ${product.price}</p>
                  <p className="card-text">Descripción: {product.description}</p>
                  <p className="card-text">Rating: {product.rating.rate}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default ProductList;