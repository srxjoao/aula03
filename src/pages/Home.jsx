import { useState,useEffect } from "react";
import Produto from "../Components/Produtos";
export default function Home() {
    const [produto, setProduto] = useState([])
    useEffect(()=>{
        const buscar = async () =>{
            try{
        const produtosInfo = await fetch('https://fakestoreapi.com/products');
        const info = await produtosInfo.json();
            setProduto(info);
            }catch{
                alert("Oii deu")
            }
        }
        buscar();
    },[])
    return(
        <>
        <Produto produtos={produto}/>
        </>
    )
}