const ProductItem = ({product}) => {
  const {name, description, price} = product
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  )
}

export default ProductItem
