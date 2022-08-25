//O css pode ser adicionado de forma global na aplicação, por meio do arquivo index.css por exemplo
//Porém pe possível estilizar a nível de componentes
//Utilizamos o Css modules para isso: 
//Basta criar um arquivo como:Componente.module.css

import styles from './frase.module.css'
function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente em uma frase!</p>
        </div>
    )
}

export default Frase