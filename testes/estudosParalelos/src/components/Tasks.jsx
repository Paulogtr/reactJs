import React from 'react'

const Tasks = ({data}) => {
  return (
    <div>
      <h2>teste</h2>
          {
            data.map((datas) => (
               <p>{datas.title} + {datas.id}</p>
            ))
         } 
         <hr />
    </div>
  )
}

export default Tasks