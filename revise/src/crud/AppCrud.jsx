import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
function AppCrud(props) {
  const [newProduct, setNewProduct] = useState([]);
  const ajouter = (product) => {
    setNewProduct((prev) => [...prev, product]);
  };
  const del = (id) => {
    const confirm = window.confirm("do you really want to remove this product from your painer ?");
    if (confirm) {
      const filtrage = newProduct.filter((p) => p.id !== id);
      setNewProduct(filtrage);
    }
  };
  const [editProductId, setEditProductId] = useState(null);

  //   partie refererence
  const refTitle=useRef()
  const refPrice=useRef()
  const refBrand=useRef()
  const edit = (v) => {
    refTitle.current.value = v.title;
    refBrand.current.value = v.brand;
    refPrice.current.value = v.price;
    setEditProductId(v.id); 
  };
  
  const saveEdit = () => {
    setNewProduct((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === editProductId) {
          return {
            ...product,
            title: refTitle.current.value,
            brand: refBrand.current.value,
            price: refPrice.current.value,
          };
        }
        return product;
      })
    );
  };
  
  
  
  return (
    <>
      <h4 style={{textAlign:'center',fontFamily:'monospace',width:'75%',margin:'auto',padding:'12px'}}>mini crud application with using just react&bootstrap</h4> 
      <div
        style={{
          flexWrap: "wrap",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.produits.map((product) => (
          <div
            className="shadow-lg rounded m-2 p-1 text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={product.id}
          >
            <div>{product.title}</div>
            <div>
              <img
                style={{ width: "250px", height: "200px" }}
                src={product.images[0]}
                alt=""
              />
            </div>
            <div>{product.price} $</div>
            <button
              onClick={() => ajouter(product)}
              className="btn btn-success w-75"
            >
              <a href="#table" className="text-decoration-none text-light">
                Ajouter au panier
              </a>
            </button>
          </div>
        ))}
      </div>
      {newProduct.length !== 0 && (
        <table id="table" className="table table-light border-dark container">
          <thead>
            <tr className="border-dark">
              <th className="border border-dark">product name</th>
              <th className="border border-dark">brand</th>
              <th className="border border-dark">price</th>
              <th className="border border-dark">image</th>
              <th className="border border-dark"></th>
              <th className="border border-dark"></th>
            </tr>
          </thead>
          <tbody>
            {newProduct.map((v) => (
              <tr className="border-dark" key={v.id}>
                <th className="border border-dark">{v.title}</th>
                <th className="border border-dark">{v.brand}</th>
                <th className="border border-dark">{v.price} $</th>
                <th className="border border-dark">
                  <img
                    style={{ width: "100px", heigth: "100px" }}
                    src={v.images[0]}
                    alt=""
                  />
                </th>
                <th className="border border-dark">
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => del(v.id)}
                  >
                    remove
                  </button>
                </th>
                <th className="border border-dark">
                  <button onClick={()=>edit(v)} className="btn btn-success w-100">
                    <a  className='text-decoration-none text-light' href="#edit">edit</a>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <form action="" className="w-50 m-auto shadow-lg p-3 mb-3">
        title <br />
        <input type="text" ref={refTitle} className="form-control" /><br />
        brand <br />
        <input type="text" ref={refBrand} className="form-control" /><br />
        price <br />
        <input type="text" ref={refPrice} className="form-control" />
        <input type="button" value='edit product' onClick={saveEdit} className="btn btn-success w-100 mt-3"  />
      </form>
    </>
  );
}

export default AppCrud;
