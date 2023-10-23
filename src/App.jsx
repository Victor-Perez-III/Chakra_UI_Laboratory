import { Box, Heading, Button, Flex, Stack } from '@chakra-ui/react'
import './App.css'
import bike from './img/bike.jpg'

function App() {

  return (
    <div>
      <Box
        h='40vh'
        bg='grey'
        bgImage={`url(${bike})`}
        bgPosition='center'
        bgSize='cover'
      >
        <Flex
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          h='100%'
          bg='rgb(0 0 0 / 50%)'
          p={['0 10%', null, '0 20%']}
        >
          <Heading
            color='white'
            textTransform='uppercase'
            textAlign='center'
            fontWeight='light'
            letterSpacing='5px'
          >

            Domina el terreno
          </Heading>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing='40px'
            mt='30px'
            w={['100px', null, 'auto']}


          >
            <Button
              variant={'outline'}
              color={"white"}
              size={'lg'}
              fontWeight={'light'}
              letterSpacing={'1px'}
              borderRadius={'0'}
              _hover={{
                color: 'black',
                bg: 'white'

              }}
            >
              Ver detalles
            </Button>

            <Button
              variant={'outline'}
              color={"white"}
              size={'lg'}
              fontWeight={'light'}
              letterSpacing={'1px'}
              borderRadius={'0'}
              _hover={{
                color: "black"
              }}
            >
              Ver Video
            </Button>
          </Stack>
        </Flex>


      </Box>


    </div>
  )
}

export default App
