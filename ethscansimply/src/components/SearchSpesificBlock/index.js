import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Collapse,
  Button,
  InputGroup,
  FormControl,
  NumberInputField,
  FormLabel,
  NumberInput,
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
    <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent='center' mt={3.75}>
    <Box my={4} w={{base:'70px', md:"140px"}} h={{base:'70px', md:"140px"}}>
        <Image src="/assets/block.png" objectFit="cover" />
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
              s {blockvalue}
            
            </Box>
        </Collapse>
    </Box>  
  );
}

export default SearchSpesificBlock;
