import { useEffect } from 'react'
import './App.css'
import Lottie from 'lottie-web'

function App() {

  useEffect(() => {
    const svgContainer = document.getElementById('svgContainer');
    Lottie.loadAnimation({
      wrapper: svgContainer,
      animType: 'svg',
      loop: true,
      path: 'https://lottie.host/51058794-50be-4081-820d-b5163a65693e/nrP66rAf88.json'
    })
  }, [])

  return (
    <>
      <div id="svgContainer"></div>
    </>
  )
}

export default App
