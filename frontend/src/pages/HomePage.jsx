import { useColorModeValue } from '../components/ui/color-mode'
import React from 'react'

const HomePage = () => {
  return (
    <div >
      <body color={useColorModeValue("white", "gray.800")}>HomePage </body>
    </div>
  )
}

export default HomePage
