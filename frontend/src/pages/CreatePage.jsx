import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
// import { useProductStore } from "../store/product";
import React from 'react';
import { useColorModeValue } from "../components/ui/color-mode";



const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })

  const handleAddProduct = () => {
    console.log(newProduct);
  };  

  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} color={useColorModeValue("white", "gray.800")}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("gray.800", "white")} 
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >

          <VStack
            spacing={4}
          >

<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

<Button colorScheme='blue' onClick={handleAddProduct} w='full' color={useColorModeValue("white", "black")} bg={useColorModeValue("black", "gray"  )}>
							Add Product
						</Button>
          </VStack>

        </Box>

      </VStack>
    </Container>
  )
}

export default CreatePage
