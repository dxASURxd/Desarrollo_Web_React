const Form = ({onSubmit}) => {
  const submit = (event) => {
    event.preventDefault()

    const form = event.target
    const name = form[0].value
    const description = form[1].value
    const price = form[2].value
    const product = {name, description, price}
    onSubmit(product);
    form.reset();
  }

  return (
    <form onSubmit={submit} className="flex gap-3 mb-4">
      <input type="text" placeholder="Nombre" className="border-2 gap-4 rounded-sm"/>
      <input type="text" placeholder="Descripcion" className="border-2 gap-4 rounded-sm"/>
      <input type="text" placeholder="Precio" className="border-2 gap-4 rounded-sm"/>
      <button type="submit" className=" bg-slate-300 hover:bg-slate-400 rounded-md p-2">Agregar</button>
    </form>
  )
}

export default Form
