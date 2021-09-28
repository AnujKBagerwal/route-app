import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const About = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  console.log('value', value);
  console.log('value2', value2);

  return (
    <div>
      About
      <div>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Typography component='legend'>Controlled</Typography>
          <Rating
            name='simple-controlled'
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Typography component='legend'>Controlled 2</Typography>
          <Rating
            name='simple-controlled2'
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default About;
