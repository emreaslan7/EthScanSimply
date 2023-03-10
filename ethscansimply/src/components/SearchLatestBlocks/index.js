import React from "react";
import {
  Box,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text
} from "@chakra-ui/react";
import BlocksInfo from "../BlocksInfo";

function SearchLatestBlocks() {

  return (
    
    <Tabs
      isLazy
      mt={{ base: 4 }}
      colorScheme="whiteAlpha"
      defaultIndex={2}
      w={{ base: "100%", lg: "50%" }}
    >
    <Box
      bgGradient="linear(to-r, gray.200 , #BDB3DE)"
      bgClip="text"
      mb={4}
    >
      <Text textAlign={'center'} fontSize={{base:'4xl', md:'5xl'}} fontWeight={'extrabold'} letterSpacing='0.1em'>LAST 3 BLOCK</Text>
    </Box>
      <TabList
      display={'flex'}
      justifyContent='center'
        alignItems='center'
        mb="1em"
        style={{ backgroundColor: "transparent", borderBottom: "none" }}
      >
        <Tab
          opacity={0.72}
          transition="all 0.5s ease-in-out"
          _selected={{ transform: "scale(1.4)", opacity: "1" }}
          _focus={{ bg: "transparent", boxShadow: "none" }}
        >
          <Box
            w={{ base: "50px", md: "100px" }}
            h={{ base: "50px", md: "100px" }}
          >
            <Image src="/assets/block.png" objectFit="cover" />
          </Box>
        </Tab>
        <Box
          w={{ base: "50px", md: "100px" }}
          h={{ base: "50px", md: "100px" }}
          mt={3}
          display="flex"
          alignItems="center"
          justifyContent={"center"}
        >
          <Box w={"100px"}>
            <Image src="/assets/chain.png" objectFit="cover" />
          </Box>
        </Box>
        <Tab
          opacity={0.72}
          transition="all 0.5s ease-in-out"
          _selected={{ transform: "scale(1.4)", opacity: "1" }}
          _focus={{ bg: "transparent", boxShadow: "none" }}
        >
          <Box
            w={{ base: "50px", md: "100px" }}
            h={{ base: "50px", md: "100px" }}
          >
            <Image src="/assets/block.png" objectFit="cover" />
          </Box>
        </Tab>
        <Box
          w={{ base: "50px", md: "100px" }}
          h={{ base: "50px", md: "100px" }}
          mt={3}
          display="flex"
          alignItems="center"
          justifyContent={"center"}
        >
          <Box w={"100px"}>
            <Image src="/assets/chain.png" objectFit="cover" />
          </Box>
        </Box>
        <Tab
          opacity={0.72}
          transition="all 0.5s ease-in-out"
          _selected={{ transform: "scale(1.4)", opacity: "1" }}
          _focus={{ bg: "transparent", boxShadow: "none" }}
        >
          <Box
            w={{ base: "50px", md: "100px" }}
            h={{ base: "50px", md: "100px" }}
          >
            <Image src="/assets/block.png" objectFit="cover" />
          </Box>
        </Tab>
      </TabList>


      
      <TabPanels px={0} pt={3}>
        <TabPanel pl={0}>
            <BlocksInfo BlockNo={2} QueryBlockNo={null}/>
        </TabPanel>
        <TabPanel pl={0}>
            <BlocksInfo BlockNo={1} QueryBlockNo={null}/>
        </TabPanel>
        <TabPanel pl={0}>
            <BlocksInfo BlockNo={0} QueryBlockNo={null}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default SearchLatestBlocks;
