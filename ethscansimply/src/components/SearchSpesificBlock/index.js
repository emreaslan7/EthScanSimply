import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Collapse,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  FormLabel,
  NumberInput,
  InputLeftElement
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function SearchSpesificBlock() {

    const { isOpen, onToggle } = useDisclosure();

    const [value, setValue] = useState();
    const [blockvalue, setblockvalue] = useState("");
  
    const handleButtonClick = () => {
      setblockvalue(value);
    };



  return (
    <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent='center'>
    <Box >
        <Image src="/assets/block.png" w={"100px"} h={"100px"} objectFit="cover" />
    </Box>
    <Box>
    <FormControl>
      <FormLabel>You can search a spesific block on Ethereum </FormLabel>
        <InputGroup>
          <NumberInput
            onChangeCapture={(e) => setValue(e.target.value)}
          >
            <NumberInputField />
          </NumberInput>

            <Button
              onClick={() => {
                onToggle();
                handleButtonClick();
              }}
            >
              Search
            </Button>
        </InputGroup>
        </FormControl>
    </Box>
        <Collapse in={isOpen} animateOpacity>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            //   position="absolute"
            //   width="100%"
            //   zIndex={1}
            >
              sEAŞDFLŞASDMFLŞAMFLŞADMALŞMDŞLAMDFLŞAMDF {blockvalue}
            </Box>
        </Collapse>
    </Box>  
  );
}

export default SearchSpesificBlock;
