// Os React Fragments permite a criação de um componente sem o elemento pai
// A sintaxe é <> e </>, não há nome para a tag

import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
              <Item marca='Ferrari' ano_lancamento={1985}/>
              <Item marca='Fiat' ano_lancamento={1964}/>
              <Item marca='Renault' />
              <Item marca='Chevrolet' ano_lancamento={1999}/>
              <Item />
            </ul>
        </>
    )
}

export default List