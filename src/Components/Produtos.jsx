import styles from '../style/produtos.module.css'
import Loading from './Loading'
export default function Produto({produtos})

{ 
  if(produtos.length === 0){
    return <div><Loading/></div>
  }
    return(
       <main>
      <ul className={styles.blocoProdutos}>
        {produtos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <center><img src={produto.image} alt={produto.title} width={100} /></center>
            <center>Preço: ${produto.price}</center>
          </li>
        ))}
      </ul>
      </main>
    )
}