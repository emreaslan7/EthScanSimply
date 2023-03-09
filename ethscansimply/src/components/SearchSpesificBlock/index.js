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
  console.log(blockvalue);
  console.log(typeof(blockvalue));
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
      <Box>
        <FormControl>
          <FormLabel>You can search a specific block on Ethereum </FormLabel>
          <InputGroup>
            <NumberInput onChangeCapture={(e) => setValue(e.target.value)} value={value}>
              <NumberInputField />
            </NumberInput>

            <Button onClick={handleButtonClick}>Search</Button>
          </InputGroup>
        </FormControl>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        {blockvalue && (
          <>
            {/* <Box p="40px" color="white" mt="4" rounded="md" shadow="md">
              Block Number: {blockvalue}
            </Box> */}
            <BlocksInfo BlockNo={blockvalue} />
          </>
        )}
      </Collapse>
    </Box>
  );
}

export default SearchSpesificBlock;

