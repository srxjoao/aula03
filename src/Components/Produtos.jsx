import styles from '../style/produtos.module.css'
export default function Produto({produtos}){
    return(
       <main>
      <h1>Lista de Produtos</h1>
      <ul className={styles.blocoProdutos}>
        {produtos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Preço: ${produto.price}</p>
            <img src={produto.image} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
      </main>
    )
}