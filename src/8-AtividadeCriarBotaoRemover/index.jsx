import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {link} from "react-router-dom";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    {id: 1, nome: 'Cookie de chocolate', preco: '4,00'},
    {id: 2, nome: 'Cookie de Oreo', preco: '4,00'},
    {id: 3, nome: 'Cookie de Nutella', preco: '4,00'}
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto]);
  };

  const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto) => {
      if (remover === false) {
        if (produto.id === id) {
          return produto;
        } else {
          remover = true;
          return null;
        }
      } else {
        return produto;
      }
    });

    setListaPedidos(listaAux);
  };
}return (
  <div>
    <h1>Cookies</h1>

    {
      listaProdutos.map((produto) => 
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
        </div>
      )
    }

    {
      listaPedidos.map((produto) => 
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={() => removerPedido(produto.id)}>Remover</button>
        </div>
      )
    }
  </div>
);

function App() {
    return (
      <div>
        <Header title="Meu Título Personalizado" /> 
        <footer desenvolvedor='Livia'/>
      </div>
    );
  }