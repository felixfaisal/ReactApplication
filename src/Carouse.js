import React from 'react';
import { Box, Carousel, Heading, Text, Anchor} from 'grommet';

class Carouse1 extends React.Component{
    render(){
        return (
            <Box align="center" justify="start" fill>
            <Box>
              <Heading color="accent-1">{this.props.Name}</Heading>
              <Heading size="small" color="accent-2">{this.props.Company}</Heading>
              <Text size="large">{this.props.Description}</Text>
              <Text size="medium" color="lightgreen">{this.props.Date}</Text>
              <Box direction="row" justify="center" gap="medium">
                <Box round="small" border={{ color: "green" }}><Text margin="2px" color="green">React</Text></Box>

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
                <Anchor href="" label="Report"></Anchor>
              </Box>

            </Box>
          </Box>
        )
    }
}

export default Carouse1;