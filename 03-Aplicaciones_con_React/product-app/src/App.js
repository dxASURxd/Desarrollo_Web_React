import ProductList from './components/ProductList'

const products = [
  {
    name: 'Uno',
    description: 'Uno',
    price: 34
  },
  {
    name: 'Dos',
    description: 'Dos',
    price: 354
  },
  {
    name: 'Tres',
    description: 'Tres',
    price: 12
  }
]

function App() {
  return (
    <div className="">
      <ProductList products={products}/>
    </div>
  );
}

export default App;
