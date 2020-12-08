import React from 'react';
import {  Heading } from 'grommet';
import { Box} from 'grommet';

class IntroHeading extends React.Component{
    render(){
        return(
            <Box background="black" justify="center" align="center">
                <Heading color="accent-1" margin="2px">Hello World</Heading>
                <Heading color="accent-2" margin="2px">I'm Felix</Heading>
            </Box>
        )
    }
}

export default IntroHeading;