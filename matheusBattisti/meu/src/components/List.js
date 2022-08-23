// Os React Fragments permite a criação de um componente sem o elemento pai
// A sintaxe é <> e </>, não há nome para a tag

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1 </li>
                <li>Item 2 </li>
            </ul>
        </>
    )
}

export default List