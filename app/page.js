import Image from "next/image";
import Cabecalho from "./components/Cabecalho";
import Produto from "./components/Produto";

export default function Home() {
  return (
  <div>
    <Cabecalho/>
    <div>
      <h1>Enviando para Github</h1>
      <p>Atividade em andamento</p>
      <p>Testando uma nova versão!  </p>
    </div>
    <hr/>
    <h2>Produtos</h2>

    <div className="flex justify-around">
    <Produto  preco="5,99" nome="Cappucino Puro com café quente com gelo" avaliacao="⭐" botao="Encomendar"/>
    <Produto nome="Café Coado" preco="2,75" avaliacao="⭐⭐⭐" botao="Comprar" />
    <Produto nome="Água com gás" preco="7,99" avaliacao="⭐⭐⭐⭐" botao="Encomendar" />
    </div>
  </div>

  );
}
