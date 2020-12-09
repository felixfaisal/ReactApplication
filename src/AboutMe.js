import React from 'react';
import './Catalog.css'
import { Grommet, Grid } from 'grommet';
import { Box, Heading, Meter} from 'grommet';
import { grommet } from 'grommet/themes';
import NavBar from './NavBar'
import IntroHeading from './IntroHeading'
//import Product from './Product'
class AboutMe extends React.Component{
    render(){
        return (
        <Grommet theme={grommet}>
        <Grid
          rows={['50vh', '50vh']}
          columns={['1/2', '1/2']}
          areas={[
            ['aboutme', 'skills'],
            ['aboutme', 'skills'],
          ]}
          gap="none"
        >
          <Box background="white" gridArea="aboutme">
              <Box>
                  <Heading color="neutral-2">About Me</Heading>
              </Box>
          </Box>
  
          <Box background="black" gridArea="skills" justify="center" align="center">
          <Box >
          <Meter
            values={[{
            value: 20,
            label: 'sixty',
            onClick: () => {}
            },{
                value:20,
                color:'accent-2',
                label:'twenty',
                onClick: () => {}
            }]}
            aria-label="meter" 
            round="true"
            size="large"
            type="circle"
            />
            </Box>
          </Box>
          
         
        </Grid>
        </Grommet>
        );
    }
}

export default AboutMe;
