import React, { useState, useEffect } from "react";
import { Box, Image, Text, Skeleton} from "@chakra-ui/react";
import axios from "axios";

function MetadataImage(props) {
  const [metadata, setMetadata] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
    setLoaded(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      let metadataUrl = props.Metadata;

      if (props.Metadata.startsWith("ipfs://")) {
        metadataUrl = `https://ipfs.io${props.Metadata.replace(
          "ipfs://",
          "/ipfs/"
        )}`;
      } else {
        metadataUrl = props.Metadata;
      }

      try {
        const response = await axios.get(metadataUrl);
        const data = response.data;
        setMetadata(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  let imageUrl = "";
  if (metadata && metadata.image) {
    if (metadata.image.startsWith("ipfs://")) {
      imageUrl = `https://ipfs.io${metadata.image.replace(
        "ipfs://",
        "/ipfs/"
      )}`;
    } else {
      imageUrl = metadata.image;
    }
  }
  return (
    <Box>
  {metadata ? (
    <>
      <Box display={{ base: "none", lg: "flex" }} justifyContent='space-between' alignItems={'center'}>
        <Text  mx="auto" textAlign='center' fontSize="2xl">{metadata.name}</Text>
        <Box w="275px" border={'3px solid #a5fdf5'} borderRadius={'xl'} boxShadow='xl'>
        {!loaded && <Skeleton w="100%" h="auto" />}
      <Image
        w="100%"
        h="auto"
        visibility={loaded ? "visible" : "hidden"}
        src={imageUrl} alt="NFT Pictures" borderRadius={'xl'}   
        onLoad={handleImageLoad}
      />
        </Box>
      </Box>
      <Box display={{ base: "none", lg: "flex" }} mt={5} alignItems='center' justifyContent={'center'}>
      <Text textAlign={'center'}>{metadata.description}</Text>
      </Box>
      
      <Box display={{ base: "flex", lg: "none" }} flexDirection="column" mt={3} mb={6}>
        <Box w="275px" m={3} mx='auto' border="3px solid #a5fdf5" borderRadius="xl" boxShadow="xl">
          <Image src={imageUrl} alt="NFT Pictures" w="100%" borderRadius="xl"/>
        </Box>
        <Text fontSize="3xl" textAlign="center" mt={2}>
          {metadata.name}
        </Text>
        <Text textAlign="center" mt={3}>{metadata.description}</Text>
      </Box>
    </>
  ) : (
    <>
      <Box display={{ base: "none", lg: "flex" }} justifyContent='space-between' alignItems='center'>
        <Text fontSize="3xl" textAlign="center" mt={2} mx='auto'>
          <Skeleton height="20px" width="120px" />
        </Text>
        <Box  border="3px solid #a5fdf5" borderRadius="xl" boxShadow="xl">
          <Skeleton height="275px" w={'275px'}/>
        </Box>
      </Box>
      <Box display={{ base: "none", lg: "flex" }} mt={5} alignItems='center' justifyContent={'center'}>
        <Skeleton height="20px" width="400px" />
      </Box>
      <Box display={{ base: "flex", lg: "none" }} flexDirection="column" mt={3} mb={6}>
        <Box w="275px" m={3} mx='auto' border="3px solid #a5fdf5" borderRadius="xl" boxShadow="xl">
          <Skeleton height="275px" />
        </Box>
        <Text fontSize="3xl" textAlign="center" mt={2}>
          <Skeleton height="20px" width="200px" />
        </Text>
        <Text textAlign="center" mt={3}>
          <Skeleton height="20px" width="300px" />
        </Text>
      </Box>
    </>
  )}
</Box>

  );
}

export default MetadataImage;
