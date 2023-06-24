const ProductItem = ({product}) => {
  const {name, description, price} = product
  return (
    <div className="mb-3 p-4">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  )
}

export default ProductItem
