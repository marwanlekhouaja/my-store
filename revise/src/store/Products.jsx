import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Nav from './Nav';
import "./style/style.css";
import 'bootstrap/dist/css/bootstrap.css';

function Products(props) {
  const styleContainer = {
    width: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
  };
  // les images size dyalhom
  const styleImg = { width: '200px', height: '200px',borderRadius:'7px' };
  let styleDivParent = { backgroundColor:'white',color:'cornflowerblue'};
  let styleDiv=`shadow-lg p-1 m-3 d-flex align-items-center flex-column rounded`
  

  const [Produits, setProduits] = useState([]);
  const refSearch = useRef();
  // une fois contenu dial produits kitbdl fa setproduits li kt afficher produits fpage ktbdl w kt afficher dakchi li kn9lbo 3lih 
  useEffect(() => {
    setProduits(props.produits); 
  }, [props.produits]);
  // function of search bar
  const search = () => {
    const searchValue = refSearch.current.value.toLowerCase();
    let newProduits = props.produits.filter((product) =>(
      product.title.toLowerCase().includes(searchValue)
    )
    );
    setProduits(newProduits);
  };

  return (
    <>
    {/* search bar li ktjib lina product li drna lih search */}
      <div className="searchbar w-50 m-auto shadow-lg d-flex bg-light align-items-center mt-3 rounded">
        <input type="search" className='form-control' ref={refSearch} onChange={search} placeholder='search for anything ... !' />
        <button className='shopNow' onClick={search}>Search</button>
      </div>
      <div style={styleContainer}>
        {Produits.map((product) => (
          <div key={product.id} className={styleDiv} style={styleDivParent}>
            <div><img src={product.images[0]} style={styleImg} alt='' /></div>
            <h5 style={{ fontSize: '13px', textAlign: 'center',marginTop:'8px' }}>{product.title}</h5>
            <h5 className='text-dark mt-2'>{product.price} $</h5>
            <button className='btn btn-primary mt-2 w-75'><Link to={`/products/detaille/${product.id}`}>Plus détaillés</Link></button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
