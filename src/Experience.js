import React from 'react';
import './Catalog.css'
import { Grommet, Grid, Anchor } from 'grommet';
import { Box, Carousel, Heading, Text} from 'grommet';
import { grommet } from 'grommet/themes';

class Experience extends React.Component{
    render(){
        return (
        <Grommet theme={grommet}>
        <Grid
          rows={['50px', '98vh']}
          columns={['1/2', '1/2']}
          areas={[
            ['header', 'header'],
            ['main', 'main'],
          ]}
          gap="none"
        >
          <Box background="dark-1" gridArea="header">
            <Box align="center" justify="center">
            <Heading size="medium" color="cyan">Experience</Heading>
            </Box>
            
          </Box>
  
          <Box background="dark-1" gridArea="main" justify="center">
          <Box height="60vh" width="100%" overflow="hidden" fill  align="center" justify="center" >
            <Carousel fill justify="center">
            <Box align="center" justify="start" fill>
              <Box>
              <Heading color="accent-1">FrontEnd Web Developer</Heading>
              <Heading size="small" color="accent-2">FOSSEE</Heading>
              <Text size="large">Free/Libre and Open Source Software for Education </Text>
              <Text size="medium" color="lightgreen">April 2020 - June 2020</Text>
              <Box direction="row" justify="center" gap="medium">
                <Box round="small" border={{color:"green"}}><Text margin="2px" color="green">React</Text></Box>
                
                <Text margin="2px" color="blue">Docker</Text>
                <Text margin="2px" color="yellow">Django</Text>
                <Text margin="2px" color="red">MXGraph</Text>

              </Box>
              <Box margin="20px">
                <Heading size="20px" color="white">I worked with a Team to build a web application that can <br></br> perform electronic simulations using NGSPICE</Heading>
                <Heading size="20px" color="white">Developed frontend for building circuits and performing simulations</Heading>
                <Heading size="20px" color="white">Interactive UI to modify simulation parameters</Heading>
              </Box>
              <Box>
                <Anchor href=""  label="Report"></Anchor>
              </Box>
              
              </Box>
            </Box>
            <Box align="center" justify="start" fill>
              <Box>
              <Heading color="accent-1">Python Developer</Heading>
              <Heading size="small" color="accent-2">FOSSEE</Heading>
              <Text size="large">Free/Libre and Open Source Software for Education </Text>
              <Text size="medium" color="lightgreen">April 2020 - June 2020</Text>
              <Box margin="40px">
                <Heading size="20px" color="white">I worked with a Team responsible for Esim section of FOSSEE</Heading>
                <Heading size="20px" color="white">Developed frontend for building circuits and performing simulations</Heading>
              </Box>
              
              </Box>
            </Box>
            
            </Carousel>
            </Box>
          </Box>
  
         
        </Grid>
        </Grommet>
        );
    }
}

export default Experience;
