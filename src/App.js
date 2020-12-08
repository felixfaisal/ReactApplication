//import logo from './logo.svg';
import './App.css';
import { Grommet, Grid, Heading } from 'grommet';
import { Box,  Text, Nav,  Button, Tip} from 'grommet';
import { grommet } from 'grommet/themes';

function App() {
  return (
    <div className="App">
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
        </Box>

        <Box background="black" gridArea="main" justify="center">
          <Box background="black" justify="center" align="center">
          <Heading color="accent-1" margin="2px">Hello World</Heading>
            <Heading color="accent-2" margin="2px">I'm Felix</Heading>
          </Box>
        </Box>

       
      </Grid>
      </Grommet>
    </div>
  );
}

export default App;
