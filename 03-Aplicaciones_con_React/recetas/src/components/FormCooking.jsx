import React from 'react'

const FormCooking = ({onSubmit}) => {

  const submit = (e) => {
    e.preventDefault();
    const form = e.target
    const nameRepice = form[0].value
    const ingredients = form[1].value
    const time = form[2].value

    const repice = {nameRepice, ingredients, time}
    // console.log(repice);
    onSubmit(repice);

    form.reset();
  }

  return (
    <form onSubmit={submit} className='grid gap-4'>
      <input type='text' placeholder='Nombre de la receta' className='p-2 border-solid border-2 rounded-md'/>
      <input type='text' placeholder='Ingredientes' className='p-2 border-solid border-2 rounded-md'/>
      <input type='number' placeholder='Tiempo de cocinado' className='p-2 border-solid border-2 rounded-md'/>
      <button className='p-2 bg-slate-500 rounded-lg hover:bg-slate-600 hover:text-slate-300'>Guardar</button>
    </form>
  )
}

export default FormCooking