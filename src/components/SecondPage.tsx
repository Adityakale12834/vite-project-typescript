import { Box } from '@mui/material';
import SecondA from './SecondA';
import SecondB from './SecondB';

function Secondpage() {
  return (
    <Box
        display="flex"
    >
        <Box
            display="flex"
            width="100%"
            height="100%"
            justifyContent="center"
        >
            <SecondA/>
        </Box>
        <Box
            display="flex"
            width="100%"
            height="100%"
            justifyContent="center"
        >
            <SecondB/>
        </Box>
    </Box>
  )
}

export default Secondpage