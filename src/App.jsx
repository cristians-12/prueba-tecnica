// import {} from

import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState(null)
  const ENDPOINT_IMG_GATO = 'https://cataas.com/cat/says/{$palabra}?size=50&color={$color}&json=true'
  const ENDPOINT_FACT = 'https://catfact.ninja/fact'

  useEffect(() => {
    fetch(ENDPOINT_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <>
      <h1>App de gatos con API</h1>
      {fact && <p>{fact}</p>}

    </>
  )
}
