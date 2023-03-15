import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

function MetadataImage(props) {
  console.log(props.Metadata);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const getNFTData = async () => {
      await fetch(props.Metadata)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          return setMetadata(data || []);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getNFTData();
  }, []);

  let imageUrl = "";
  if (metadata && metadata.image) {
    if (metadata.image.startsWith("ipfs://")) {
      imageUrl = `https://ipfs.io${metadata.image.replace("ipfs://", "/ipfs/")}`;
    } else {
      imageUrl = metadata.image;
    }
  }
  
  return (
    <Box>
      <Image src={imageUrl} alt='NFT Pictures'/>
    </Box>
  );

  // useEffect(() => {
  //   async function fetchMetadata() {
  //     const cid = "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/582";
  //     try {
  //       const res = ipfs.cat(cid);
  //       const chunks = []
  //       for await (const chunk of res) {
  //         chunks.push(chunk)
  //       }
  //       const data = JSON.parse(chunks.toString())
  //       setMetadata(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   fetchMetadata();
  // }, []);
  // console.log(metadata);
  // return (
  //   <></>
  // <Box w={'300px'}>
  //     <Image src={metadata.image} objectFit={'cover'}/>
  // </Box>
  // )
}

export default MetadataImage;
