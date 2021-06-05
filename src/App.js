import "./styles.css";
import { useState } from "react";

export default function App() {
  
  const [products, setProducts] = useState([]);

  function handleProductRemove(productName) {
    console.log(`Item removed: ` + productName);
    const newProductList = products.filter((product) => {
      return product !== productName;
    });
    console.log(newProductList);

    setProducts(newProductList);
    console.log(`New Array returned: ` + newProductList);
  }

  function renderProducts() {
    const arrayOfComponents = products.map((productName) => {
      return (
        <Product
          onClickProductRemove={handleProductRemove}
          name={productName}
          key={productName} 
        />
      );
    });

    return arrayOfComponents;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.productName;
    console.log("Form submitted");
    console.log(event.target.productName.value); 
    const newProducts = [...products, input.value];
    setProducts(newProducts);
    form.reset();
  }

  return (
    <div className="App">
      <h2 className="heading">Simple Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="add products here"
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul className="listParent">{renderProducts()}</ul>
    </div>
  );
}

function Product({ name, onClickProductRemove }) {
  function handleButtonClick() {
    onClickProductRemove(name);
  }
  return (
    <li className="listItem">
      {name + ` `}
      <button className="deleteButton" onClick={handleButtonClick}>
        delete
      </button>
    </li>
  );
}
