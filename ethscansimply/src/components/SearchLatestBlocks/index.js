import React from 'react'
import {   Box,
    Container,
    Flex, Image, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function SearchLatestBlocks() {
  return (
    
        <Tabs
          colorScheme="whiteAlpha"
          align="center"
          defaultIndex={2}
          w={{ base: "100%", lg: "50%" }}
        >
          <TabList
            mb="1em"
            style={{ backgroundColor: "transparent", borderBottom: "none" }}
          >
            <Tab
              opacity={0.72}
              transition="all 0.5s ease-in-out"
              _selected={{ transform: "scale(1.4)", opacity: "1" }}
              _focus={{ bg: "transparent", boxShadow: "none" }}
            >
              <Box w={"100px"} h={"100px"}>
                <Image src="/assets/block.png" objectFit="cover" />
              </Box>
            </Tab>
            <Box
              w={"100px"}
              h={"100px"}
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
              <Box w={"100px"} h={"100px"}>
                <Image src="/assets/block.png" objectFit="cover" />
              </Box>
            </Tab>
            <Box
              w={"100px"}
              h={"100px"}
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
              <Box w={"100px"} h={"100px"}>
                <Image src="/assets/block.png" objectFit="cover" />
              </Box>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Block 1</p>
            </TabPanel>
            <TabPanel>
              <p>Block2</p>
            </TabPanel>
            <TabPanel>
              <p>Block3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
    
  )
}

export default SearchLatestBlocks