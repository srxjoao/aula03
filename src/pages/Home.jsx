import { useState,useEffect } from "react";
import Produto from "../Components/Produtos";
export default function Home() {
   // O estados de lista vai receber os dados, recebendo os dados da API e renderizando o map
   //event.target.value
    const [produto, setProduto] = useState([])
    const [buscadados, Setbuscadados] = useState([])
    useEffect(()=>{
        const buscar = async () =>{
            try{
        const produtosInfo = await fetch('https://fakestoreapi.com/products');
        const info = await produtosInfo.json();
            setProduto(info);
            }catch{
                alert("Oii não  deu certo :)")
            }
        }
        buscar();
    },[]);

    const ordemAZ = () =>{
        // ele vai buscar todas inforações e vai ter a obrigação de pegar tds itens 
                                            //parametros, ao lado funçaõ de comparação seguindo uma order
        // fica sublhinado pq não esta sendo usado
        const listaAux = [...produto].sort((a,b)=> a.title.localeCompare(b.title));
        setProduto(listaAux);
    }

    const ordemZA = () =>{
        const listaAux2 = [...produto].sort((z,y)=> y.title.localeCompare(z.title));
        setProduto(listaAux2)
    }
   
    const MenorPreco = () => {
        const listPreco = [...produto].sort((a, b) => a.price - b.price);
        setProduto(listPreco);
      }
    
      const MaiorPreco = () => {
        const listPrecoMaior = [...produto].reverse((a, b) => a.price - b.price);
        setProduto(listPrecoMaior);
      }
    
    
    return(
        <>
              <h1>Lista de Produtos</h1>
              <div >
        <button onClick={()=>ordemAZ()}>Listar de A a Z</button>
        <button onClick={()=>ordemZA()}>Listar de Z a A</button>
        <button onClick={()=> MenorPreco()}>Listar por Menor Preço</button>
        <button onClick={()=>MaiorPreco()}>Listar por Maior Preço</button>
        </div >
        <Produto produtos={produto}/>
        
        </>
    )
}