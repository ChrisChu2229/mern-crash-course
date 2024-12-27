import { Box, Button, Container, createToaster, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import React from 'react';
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "../components/ui/toaster"



const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })

  const {createProduct} = useProductStore();

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
    if (!success) {
      toaster.create({
        title:"Error",
        description: message,
        type: "error",
        isClosable: true,
        key: "error"
      })
    } else {
      toaster.create({
        title: "Success",
        description: message, 
        type: "success",
        isClosable: true,
        key: "success"
      })
    }

    setNewProduct({name: "", price: "", image: ""});

  };  

  return (
    <Container maxW={"container.sm"}>
      <Toaster/>
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
              color={useColorModeValue("gray.800, white")}
              style={{"outlineColor": "white"}}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              color={useColorModeValue("gray.800, white")}
              style={{"outlineColor": "white"}}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              color={useColorModeValue("gray.800, white")}
              style={{"outlineColor": "white"}}
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
