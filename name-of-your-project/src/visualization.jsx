import { ChakraProvider, Button, Heading, Link, Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
 
export default {
 colors: {
   lavender: '#7E549F',
   mulberry: '#C1549C',
   salmon: '#FB836F',
   sunglow: '#FFCB3E',
 },
}
 
export function Visualization() {
 return (
   <ChakraProvider>
     <Box w='100%' h='718px' bgGradient='linear(to-b, purple.400, pink.300, orange.200, yellow.100)'>
       <Grid
       templateAreas={`"r1"
                       "r2"
                       "r3"
                       "r4"`}
       gridTemplateRows={'100px 120px 180px 60px'}
       gap='0'
       color='blackAlpha.700'
       fontWeight='bold'
       >
         <GridItem align='center' area={'r1'}></GridItem>
         <GridItem align='center' area={'r2'}>
           <Heading as='b' fontSize='80px' noOfLines={1} color='black'>
             Your Spotify Visualized
           </Heading>
         </GridItem>
         <GridItem align='center' area={'r3'}>
           <Heading as='i' fontSize='40px' noOfLines={1} color='black'>
             Visualize your top tracks
           </Heading>
         </GridItem>
         <GridItem align='center' area={'r4'}>
           <Button colorScheme='pink' height='50px' width='200px' borderRadius='100px' variant='solid'>
             <Link color='white' href='/login' fontSize='21px'>
               Penis
             </Link>
           </Button>
         </GridItem>
       </Grid>
     </Box>
   </ChakraProvider>
 );
}


