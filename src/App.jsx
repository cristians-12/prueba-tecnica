// import {} from

import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState(null)
  const [valor, setValor] = useState('')
  const [imageUrl, setimageUrl] = useState('')
  //   const ENDPOINT_IMG_GATO =
  // 'https://cataas.com/cat/says/{$palabra}?size=50&color={$color}&json=true'
  const ENDPOINT_FACT = 'https://catfact.ninja/fact'

  useEffect(() => {
    fetch(ENDPOINT_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        // const palabra = fact.split(' ')[0]
        fetch(`https://cataas.com/cat/says/${valor}?size=50&color={$color}&json=true`)
          .then(res => res.json())
          .then(respuesta => {
            const { url } = respuesta
            setimageUrl(`https://cataas.com${url}`)
          })
      })
  }, [valor])

  const nuevoFact = (e) => {
    setValor(e.target.value)
    // console.log(valor)
  }

  return (
    <>
      <h1 className='my-5 font-sans'>Cat Fact app</h1>
      {fact && <p className='my-2 font-sans'>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cat' className='w-25 rounded-lg text-center' />}
      <br />
      <input type='text' name='palabra' value={valor} onChange={nuevoFact} placeholder='Ingrese una palabra' className='p-2 rounded-lg w-100' />
    </>
  )
}
