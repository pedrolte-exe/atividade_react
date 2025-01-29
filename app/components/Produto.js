function Produto( attr ) {
    return ( 
        <div className="border-solid border w-1/6 bg-gray-400 p-3">
            <div className="text-center">
            <img  src="https://placehold.co/200"/>
            </div>
        
            <h2 className="text-lime-800"> {attr.nome} </h2>
            <p>{attr.avaliacao}</p>
            <p> R$ {attr.preco} </p>
            <button className="border-2 rounded-full p-2 bg-blue-500 text-white"> {attr.botao}</button>
        </div>
     );
}

export default Produto;