import React from 'react';
import './Catalog.css'
import { Grommet, Grid } from 'grommet';
import { Box,  Heading} from 'grommet';
import { grommet } from 'grommet/themes';
//import Product from './Product'
class AboutMe extends React.Component{
    render(){
        return (
        <Grommet theme={grommet}>
        <Grid
          rows={['100px', '80vh']}
          columns={['1/2', '1/2']}
          areas={[
            ['header', 'header'],
            ['main', 'main'],
          ]}
          gap="none"
        >
          <Box background="white" gridArea="header">
            <Box align="center" justify="center">
            <Heading color="neutral-2">About Me</Heading>
            </Box>
            
          </Box>
  
          <Box background="white" gridArea="main" justify="center" overflow="hidden">
          <Box height="60vh" width="100%" overflow="hidden" fill  align="center" justify="start" >
            <Heading size="small" color="black"> 
            My name is Faisal Ahmed Farooq, I'm a student studying B.Tech in Presidency University.  </Heading>
            <Heading size="small" color="black"> 
            I have a good understanding of microservices architecture and familiar with Django and React for frontend and backend.
            </Heading>
            <Heading size="small" color="black"> 
            </Heading>
            
           
          </Box>
          </Box>
  
         
        </Grid>
        </Grommet>
        );
    }
}

export default AboutMe;
