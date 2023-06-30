import React from 'react'
import zinc from '../../assets/zinc.png'
import './Products.css'
function Products() {
  return (
    <div className='container1  flex columns-2 text-slate-50 bg-blackish'>
      <div className='item1 w-1/2   flex  justify-center items-center'>
        <img src={zinc} alt="zinc"  width={540} height={500}/>
      </div>
      <div className='item2 w-1/2 flex  items-center'>
        <div className='flex flex-col'>

        <h1 className='text-1.5xl'>ZINC-ALUMINIUM</h1>
        <h3 className='text-1.5xl font-bold'>ZINACOR®</h3>
        <h1 className='text-8xl font-bold'>Z850</h1>
        <h1 className='text-8xl font-bold'>Z851</h1>
      <button className='bg-custom-grey hover:bg-black m-5 rounded-lg'><a href="https://www.zinacor.com/en/products/z850-z851-2/">See the product</a></button>
        
        </div>
      </div>
    </div>
  )
}

export default Products
