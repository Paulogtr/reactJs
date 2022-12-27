import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ComponenteDinamico = () => {

   const data = [
      {

         nome: 'Paulo',
         idade: 25,
         altura: 1.80,
      },
      {

         nome: 'João',
         idade: 30,
         altura: 1.80,
      },
      {

         nome: 'Carlos',
         idade: 20,
         altura: 1.80,
      }
   ];

   const [number, setNumber] = useState(0);

   const somaNumber = () => {
      setNumber(number + 1)
   }

   useEffect(() =>{
      console.log('executando useEffect')
   },[])

   return (
      <div>
         <div>
            {data.map((pessoas) => {
               return (
                  <div>
                  {` O seu nome é: ${pessoas.nome}` }
                  {` A sua Idade é: ${pessoas.idade}` }
                  {` A sua altura é:  ${pessoas.altura}` }
                  </div>
               )
            })}
         </div>
         <p>Numero: {number}</p>
         <button onClick={somaNumber}></button>
         <hr />
      </div>
   )
}

export default ComponenteDinamico