import React from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
//You can also write direct cdn links of images rather than having static images into your project
import laptop from './images/laptop.jpg';
import telephone from './images/telephone.jpg';
import watch from './images/watch.jpg';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: watch,
          id: 1
        },
        {
          price: 999,
          title: 'Tele Phone',
          qty: 10,
          img: telephone,
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: laptop,
          id: 3
        }
      ]
    }
  }
//Fuction to increase cart Item quantity
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    //This Line is a shortHand to setting same Products into state
    this.setState({
      products
    })
  }
  //Function to decrease cart Item quantity
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  //Function to delete cart Item
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }
 //Function to get cart count
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

 //Function to get total cart item price
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }

  render () {
    //It assigns this.state.products to the local constant products
    const { products } = this.state;
    return (
      <div className="App"> {/* Way of external styling in React */}
        <Header count={this.getCartCount()} />
        {/* We can also pass variables as well as functions through props */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {/* Way of inline styling in React */}
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
