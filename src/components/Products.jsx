import React from 'react'
import Product from './Product'

const Products = () => {

    const productsData = [
        {
          title:"arqitel",
          desc:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, fugiat autem. Labore maiores dignissimos consectetur porro. Error vel delectus quis.",
          liveButton:true,
          caseButton:false
        },
        {
          title:"TTR",
          desc:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, fugiat autem. Labore maiores dignissimos consectetur porro. Error vel delectus quis.",
          liveButton:true,
          caseButton:false
        },
        {
          title:"YIR 2022",
          desc:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, fugiat autem. Labore maiores dignissimos consectetur porro. Error vel delectus quis.",
          liveButton:true,
          caseButton:true
        },
        {
          title:"Yahoo",
          desc:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, fugiat autem. Labore maiores dignissimos consectetur porro. Error vel delectus quis.",
          liveButton:true,
          caseButton:true
        }
    ]
  return (
    <div>
        {productsData.map((val,index)=> <Product val={val}/>)} 
    </div>
  )
}

export default Products