import { useProductStore } from '../store/product';
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProductCard  from "../components/ProductCard"





const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        
        <Text

          textStyle={"3xl"}
					bgGradient={"to-r"}
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
          bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          gap={"20px"}
          w={"full"}  
        >

          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}

        </SimpleGrid>
        
        {products.length === 0 && (
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
        )}


        
      </VStack>
    </Container>
  )
}

export default HomePage
