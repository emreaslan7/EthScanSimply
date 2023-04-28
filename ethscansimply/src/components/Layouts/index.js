import { Inter } from '@next/font/google'
import Header from '../Header'
import Footer from '../Footer'
import { Box } from '@chakra-ui/react'

const interFontFamily = Inter({ subsets: ['latin'] });

export default function Layouts({ children }) {
    return (
        <div className={interFontFamily.className}>
            <Box display="flex" flexDirection="column" height="100vh">
            
                <Header/>

                    <Box bg={"#83a8f9"} color="white" flex="1">
                        {children}
                    </Box>
                    
                <Footer/>

            </Box>
        </div>


    )
}