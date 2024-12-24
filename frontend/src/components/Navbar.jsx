import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


import { FaRegPlusSquare } from "react-icons/fa";
// import { IoMoon } from "react-icons/io5";
// import { LuSun } from "react-icons/lu";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>

      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
        }}
      >

        <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛍️</Link>
				</Text>

        <HStack spacing={2} alignItems={"center"}>
          <Button>
            <FaRegPlusSquare />
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
