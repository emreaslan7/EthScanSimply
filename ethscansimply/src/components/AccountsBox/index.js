import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { Box, Text, Tooltip, Center, Button ,Input, useToast} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

function AccountsBox() {
  const router = useRouter();
  const toast = useToast();

  const [value, setValue] = useState("");
  console.log(value.length);
  const handleButtonClick = () => {
    if (value.length != 42) {
      return (
        toast({
          title: 'This is not an address',
          description: "Please write an address",
          status: 'error',
          duration: 7000,
          isClosable: true,
        })
      )
    } else {
      router.push(`/accounts/${value}`);
    }
  };
  return (
    <Box         
    w={{ base: "300px", lg: "300px", xl: "350px" }}
    h={{ base: "300px", lg: "300px", xl: "350px" }}
    boxShadow='xl'>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%" width="100%"
      borderRadius="xl"
      borderWidth="4px"
      borderColor="#9c8fd8"
      bg="#cec3fa"
      boxShadow="2xl"
      transition="all 0.2s ease-in-out"
      position="relative"
    >

      <Tooltip 
        hasArrow 
        label="You can deep dive into the ethereum accounts (contract or externally)" 
        placement='top-end' 
        openDelay={300} closeDelay={500} 
        bg='#9c8fd8' 
        color='white'
        fontSize={'16px'}
        borderRadius="md">

          <InfoIcon boxSize={6} position="absolute" top="1" right="1" m={1} color="#9c8fd8"/>

      </Tooltip>
        
      <Box w={"90%"}>
        <Text wordBreak={'normal'} fontSize={{ base: '24px', xl:'29px'}} letterSpacing="0.25em" ml={1} color="#9c8fd8" fontWeight="extrabold" textDecoration="none" textAlign={"center"}>
          ACCOUNT INFORMATION
        </Text>
        

        <Input mt={4} fontWeight={'semibold'} color={'#9c8fd8'} placeholder='paste address (contract or eoa wallet)' _placeholder={{fontSize:'sm' ,color:'#9c8fd8', opacity:'0.75', fontWeight:'normal'}} size={'lg'} border='3px solid #9c8fd8' _hover={{}} focusBorderColor="#9c8fd8" onChange={(e) => setValue(e.target.value)} value={value} />
        <Center mt={1}>

         <Button onClick={handleButtonClick} w={'80%'} border='3px solid #9c8fd8' bgColor={'#cec3fa'} color='#9c8fd8' _hover={{bgColor:'#9c8fd8',color:'#cec3fa'}} transition='all ease-in 0.3s'> Search on Ethereum </Button>

        </Center>
        </Box>

    </Box>
    </Box>
  )
}

export default AccountsBox;