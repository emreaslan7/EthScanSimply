import React, { useState } from "react";
import {
  Box,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spinner,
  Center,
} from "@chakra-ui/react";
import BlocksInfo from "../BlocksInfo";

function SearchLatestBlocks() {
  const [loading, setLoading] = useState(false);

  function handleTabsChange() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <Tabs
      onChange={handleTabsChange}
      isLazy
      mt={{ base: 6, md: 8 }}
      colorScheme="whiteAlpha"
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
          panelId="4"
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
      <TabPanels>
        <TabPanel>
          {loading ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#9c8fd8"
                size="xl"
              />
            </Center>
          ) : (
            <BlocksInfo BlockNo={2} />
          )}
        </TabPanel>
        <TabPanel>
          {loading ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#9c8fd8"
                size="xl"
              />
            </Center>
          ) : (
            <BlocksInfo BlockNo={1} />
          )}
        </TabPanel>
        <TabPanel>
          {loading ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#9c8fd8"
                size="xl"
              />
            </Center>
          ) : (
            <BlocksInfo BlockNo={0} />
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default SearchLatestBlocks;
