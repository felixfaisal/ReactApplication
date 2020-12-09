import React from 'react';
import './Catalog.css'
import { Grommet, Grid } from 'grommet';
import { Box, Carousel, Heading, Text, Tabs, Tab, Meter} from 'grommet';
import { grommet } from 'grommet/themes';

//import Product from './Product'
class Contact extends React.Component{
    render(){
        return (
        <Grommet theme={grommet}>
        <Grid
          rows={['80px', '93vh']}
          columns={['1/2', '1/2']}
          areas={[
            ['header', 'header'],
            ['main', 'main'],
          ]}
          gap="none"
        >
          <Box background="black" gridArea="header">
            <Box align="center" justify="center">
            <Heading  color="lightgreen">Skills</Heading>
            </Box>
            
          </Box>
  
          <Box background="black" gridArea="main" justify="center" gap="none">
          <Box direction="row" align="center" justify="center" gap="small">
            <Heading size="small" color="accent-2">Django</Heading>
            <Heading size="small" color="accent-1">React</Heading>
            <Heading size="small" color="accent-3">Docker</Heading>
            <Heading size="small" color="accent-5">Git</Heading>
            <Heading size="small" color="accent-4">SQL</Heading>
          </Box>
          <Box height="60vh" width="100%" overflow="hidden" fill  align="center" justify="center" >
            <Meter
              values={[{
                  value: 50,
                  label: 'sixty',
                  color: 'accent-2',
                  onClick: () => {}
              },
              {
                value: 20,
                label: 'sixty',
                color: 'accent-1',
                onClick: () => {}
              },
              {
                value: 20,
                label: 'sixty',
                color: 'accent-3',
                onClick: () => {}
              },
              {
                value: 10,
                label: 'sixty',
                color: 'red',
                onClick: () => {}
              },
              {
                value: 30,
                label: 'sixty',
                color: 'accent-4',
                onClick: () => {}
              }
            ]}
              aria-label="meter"
              type="circle"
              size="large"
              />
            
            </Box>
          
           
          </Box>
  
         
        </Grid>
        </Grommet>
        );
    }
}

export default Contact;
