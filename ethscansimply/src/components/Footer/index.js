import React from "react";
// import Link from "next/link";
import { Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function Footer() {
  return (
    <footer>
      <Box bg={"gray.900"} p={1.85} color='white' fontSize={'xs'} align="center" justify="center">
        Made with ❤️ by&nbsp;
        <Link href='https://twitter.com/blockenddev' isExternal>
          Emre Aslan
        </Link>
      </Box>

    </footer>
  );
}

export default Footer;