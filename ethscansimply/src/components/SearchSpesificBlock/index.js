import React, { useState, useEffect} from "react";
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
import BlocksInfo from "../BlocksInfo";

function SearchSpesificBlock() {
  const { isOpen, onToggle } = useDisclosure();
  const [value, setValue] = useState("");
  const [blockvalue, setblockvalue] = useState(null);

  useEffect(() => {
    console.log("Block value changed");
  }, [blockvalue]);

  const handleButtonClick = () => {
    setblockvalue(Number(value));
    onToggle();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={3.75}
      key={blockvalue}
    >
      <Box my={4} w={{ base: "70px", md: "140px" }} h={{ base: "70px", md: "140px" }}>
        <Image src="/assets/block.png" objectFit="cover" />
      </Box>
      <Box mt={4}>
        <FormControl>
          <FormLabel>You can search a specific block on Ethereum </FormLabel>
          <InputGroup>
            <NumberInput focusBorderColor="#BDB3DE" onChangeCapture={(e) => setValue(e.target.value)} value={value}>
              <NumberInputField />
            </NumberInput>

            <Button onClick={handleButtonClick} bgColor={'#BDB3DE'} ml={1} p={3} _hover={{}}>Search</Button>
          </InputGroup>
        </FormControl>
      </Box>
      <Collapse in={isOpen} animateOpacity> 
        { blockvalue && <BlocksInfo QueryBlockNo={blockvalue} BlockNo={null}/>}
      </Collapse>
    </Box>
  );
}

export default SearchSpesificBlock;

