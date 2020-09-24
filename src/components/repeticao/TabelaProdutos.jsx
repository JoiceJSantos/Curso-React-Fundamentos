import React from 'react'
import products from '../../data/produtos'

export default props =>{
    const tabelaProdutos = products.map((product, i) =>{
        return(
            <tbody>
                <tr key={product.id} className={i % 2 === 0 ?'Par':''}>
                    <td>{product.id}</td>
                    <td>{product.product}</td>
                    <td>R$ {product.price.toFixed(2).replace('.',',')}</td>
                </tr>
            </tbody>
        ) 
    })
     return (
         <div className="tabela">
             <table className="Products">
                 <thead>
                     <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                {tabelaProdutos}
             </table>
         </div>
     )
}