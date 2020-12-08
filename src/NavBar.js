import React from 'react';
import './Product.css';
import { Box,  Text, Nav,  Button, Tip} from 'grommet';
class NavBar extends React.Component{
    render(){
    return (
        <Nav direction="row" pad="xsmall" align="center" justify="end">
          <Tip
            content={
              <Box align="center" background="black">
                <Text>Built using ReactJS</Text>
              </Box>
            }
            background="black"
          >
            <Button  label="ReactJS"></Button>
          </Tip>
            <Button  label="Docker"></Button>
            <Button  label="Nginx"></Button>
            <Button  label="Grommet"></Button>
            <Button  label="Felix"></Button>
  </Nav>
    )
    }
}

export default NavBar;