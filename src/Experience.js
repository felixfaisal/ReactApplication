import React from 'react';
import './Catalog.css'
import { Grommet, Grid, Anchor } from 'grommet';
import { Box, Carousel, Heading, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import Carouse1 from './Carouse'
class Experience extends React.Component {
  render() {
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
            <Box height="60vh" width="100%" overflow="hidden" fill align="center" justify="center" >
              <Carousel fill justify="center">
                <Carouse1 Name="Frontend Developer" Date="April 2020 - June 2020" Company="FOSSEE" Description="Free/Libre and Open Source Software for Education " />
                <Carouse1 Name="Python Developer" Date="December 2020 - Present" Company="Dr. KY Research Foundation" />
                <Carouse1 Name="Ethical Hacker" Date="April 2019 - July 2019" Company="Internshala" Description="Ethical Hacking Hackathon" />

              </Carousel>
            </Box>
          </Box>


        </Grid>
      </Grommet>
    );
  }
}

export default Experience;
