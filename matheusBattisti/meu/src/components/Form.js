function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuário!')
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type='text' placeholder='Digite o seu nome' />
                </div>
                <input type='submit' value='cadastrar' />
            </form>
        </div>
    )
}

export default Form