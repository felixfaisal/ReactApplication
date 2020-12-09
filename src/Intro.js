import React from 'react';
import './Catalog.css'
import { Grommet, Grid } from 'grommet';
import { Box} from 'grommet';
import { grommet } from 'grommet/themes';
import IntroHeading from './IntroHeading'
//import Product from './Product'
class Intro extends React.Component{
    render(){
        return (
        <Grommet theme={grommet}>
        <Grid
          rows={['50px', '95vh']}
          columns={['1/2', '1/2']}
          areas={[
            ['header', 'header'],
            ['main', 'main'],
          ]}
          gap="none"
        >
          <Box background="black" gridArea="header">
            
          </Box>
  
          <Box background="black" gridArea="main" justify="center">
            <IntroHeading />
          </Box>
  
         
        </Grid>
        </Grommet>
        );
    }
}

export default Intro;
