import React, { useState, useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";

function MetadataImage(props) {
  console.log("Props.Metadata", props.Metadata);
  const [metadata, setMetadata] = useState(null);

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
        console.log(response);
        const data = response.data;
        console.log(data);
        setMetadata(data);
        // işlemleriniz burada devam edebilir
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
    // <Box>
    //   {metadata ? (
    //     <Box display={"flex"} justifyContent={{ base: "center", lg: "none" }}>
    //       <Box>
    //         <Box w={"200px"} border={"1px"} m={3}>
    //           <Image src={imageUrl} alt="NFT Pictures" />
    //         </Box>
    //         <Text fontSize={"2xl"}>{metadata.name}</Text>
    //         <Text>{metadata.description}</Text>
    //       </Box>
    //     </Box>
    //   ) : (
    //     <div>dasdasd</div>
    //   )}
    // </Box>
    <Box>
  {metadata ? (
    <>
      <Box display={{ base: "none", lg: "flex" }} justifyContent='space-between' alignItems={'center'}>
        <Text  mx="auto" textAlign='center' fontSize="2xl">{metadata.name}</Text>
        <Box w="275px" border={'3px solid #a5fdf5'} borderRadius={'xl'} boxShadow='xl'>
          <Image src={imageUrl} alt="NFT Pictures" borderRadius={'xl'}/>
        </Box>
      </Box>
      <Box display={{ base: "none", lg: "flex" }} mt={5} alignItems='center' justifyContent={'center'}>
      <Text textAlign={'center'}>{metadata.description}</Text>
      </Box>
      
      <Box display={{ base: "flex", lg: "none" }} flexDirection="column" mt={3}>
        <Box w="275px" m={3} mx='auto' border="3px solid #a5fdf5" borderRadius="xl" boxShadow="xl">
          <Image src={imageUrl} alt="NFT Pictures" w="100%"/>
        </Box>
        <Text fontSize="3xl" textAlign="center" mt={2}>
          {metadata.name}
        </Text>
        <Text textAlign="center" mt={3}>{metadata.description}</Text>
      </Box>
    </>
  ) : (
    <div>dasdasd</div>
  )}
</Box>

  );
}

export default MetadataImage;
