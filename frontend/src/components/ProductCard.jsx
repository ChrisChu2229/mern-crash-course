import React from 'react'
import { Box, Image, Heading, HStack, IconButton, Text, VStack, Input, Button, useDisclosure, Container } from '@chakra-ui/react'

import { useColorModeValue } from './ui/color-mode'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useProductStore } from '../store/product';
import { Toaster, toaster } from "../components/ui/toaster"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/modal'
import { useState } from 'react'  


const ProductCard = ({product}) => {

    const [updatedProduct, setUpdatedProduct] = useState(product);

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800")
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const { deleteProduct } = useProductStore();

    const handleDeleteProduct = async (pid) => { 
        const {success, message} = await deleteProduct(pid);
        console.log("success:", success);
        console.log("message:", message);
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
    }

  return (
    
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
    >
        <Toaster/>

        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box p={4}>

            <Heading as='h3' size='md' mb={2} color={textColor}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>
                <IconButton onClick={openModal} colorScheme='blue' ><FaRegEdit/></IconButton>
                <IconButton
                    onClick={() => handleDeleteProduct(product._id)}
                    colorScheme='red'
                ><MdDelete /></IconButton>
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay alignSelf={"center"} alignItems={"center"} margin={"auto"} alignContent={"center"}/>

                <ModalContent maxH={"400px"} maxW={"400px"} alignSelf={"center"} alignContent={"center"} margin={"auto"} top={"150px"} bgColor={"black"} p={"20px"}>
                  <ModalCloseButton maxW={"20px"} alignSelf={"end"} />
                    <ModalHeader fontStyle={"bold"} fontSize={"20px"}>Update Product </ModalHeader>
                    
                    
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder='Product Name'
                                name='name'
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <Input
                                placeholder='Price'
                                name='price'
                                type='number'
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={() => handleUpdateProduct(product._id, updatedProduct)}    
                        >
                            Update
                        </Button>
                        <Button variant='ghost' onClick={closeModal}>
                            Cancel
                        </Button>
                    </ModalFooter>  
                </ModalContent>
            </Modal>

    </Box>


  )
}



export default ProductCard