import Form from './Form'
import ProductItem from './ProductItem'

const ProductList = ({products}) => (
  <>
    <h1>Mi lista de productos</h1>
    <Form products={products}/>
    <ul>
      {products.map((product) => (
        <li>
          <ProductItem product={product}/>
        </li>
      ))}
    </ul>
  </>
)

export default ProductList
