import { Button } from "./components/ui/button"
import { HStack } from "@chakra-ui/react"
import { ColorModeButton } from "./components/ui/color-mode"

const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
      <ColorModeButton/>
    </HStack>
  )
}

export default Demo