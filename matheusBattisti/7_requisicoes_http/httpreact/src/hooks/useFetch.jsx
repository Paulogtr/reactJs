import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
   const [data, setData] = useState(null)

   // 5 - refatorando post
   const [config, setConfig] = useState(null)
   const [method, setMethod] = useState(null)
   const [callFetch, setCallFetch] = useState(false)

   // 6 - loading
   const [loading, setLoading] = useState(false)

   // 7 - tratando erros
   const [error, setError] = useState(null)

   // 9 delete
   const [item, setItem] = useState(null)

   const httpConfig = (data, method) => {
      if (method === "POST") {
         setConfig({
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(data)
         })
         setMethod("POST")
      } else if (method === "DELETE"){
         setConfig({
            method: "DELETE",
            headers: {
               "content-type": "application/json",
            },
         })

         setMethod("DELETE")
         setItem(data)
      }
   }
   useEffect(() => {
      const fetchData = async () => {

         // 6- loading
         setLoading(true)

         try {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)

            setMethod(null);
            setError(null);

         } catch (error) {
            console.log(error.message)
            setError("Houve algum erro ao carregar os dados!")
         }

         setLoading(false)
      }
      fetchData()
   }, [url, callFetch]);

   // 5 - refatorando post
   useEffect(() => {
      const httpRequest = async () => {
         if (method === "POST") {

            let fetchOptions = [url, config]

            const res = await fetch(...fetchOptions)

            const json = await res.json()

            setCallFetch(json)
         } else if (method === "DELETE") {
            const deleteItem = `${url}/${item}`

            const res = await fetch(deleteItem, config)

            const json = await res.json()

            setCallFetch(json)
         }
      }
      httpRequest()

   }, [config])

   return { data, httpConfig, loading, error }
}