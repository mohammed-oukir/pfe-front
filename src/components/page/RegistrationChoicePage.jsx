import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, Container, Typography } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Usb from '@mui/icons-material/Usb';


const ChoiceCard = ({isSelected, content, onSelect, Icon}) => {

  return (
    <Box onClick={onSelect} sx={{borderColor: isSelected ? "green" : "grey.200", borderWidth: 2, borderStyle: "solid", borderRadius: 3, bg: "", padding: 4, cursor: 'pointer'}}>
      <Box sx={{display: "flex", mb: 3, alignItems:"center", justifyContent: "space-between"}}>
        <Icon fontSize='large' color='primary' />
        <Checkbox variant="rounded" checked={isSelected} />
      </Box>
      <Typography fontSize={"large"} sx={{ fontWeight: "bold"}}>{content}</Typography>
    </Box>
  )
}
const RegistrationChoicePage = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const userType = selectedOption === 1 ? 'client' : 'professional';
  return (
    <Box>
      <Container>
      <Typography sx={{textAlign: 'center', my: 5}} fontSize={'lg'} variant="h2">Join as client or Professional</Typography>

      <Box sx={{display: 'flex', justifyContent: 'space-around',}}>
        <ChoiceCard Icon={EngineeringIcon} onSelect={() => setSelectedOption(1)} content={"test aifjadda ada ergr"} isSelected={selectedOption === 1} />
        <ChoiceCard Icon={Usb} onSelect={() => setSelectedOption(2)} content={"loremnj nakkskadsfjf"} isSelected={selectedOption === 2} />
      </Box>

      <Box sx={{my: 3}} />

      <Box sx={{display: "flex", justifyContent: "center", w:"100%"}}>
        <Button borderRadius="full" variant="contained" color="primary" >Join As {userType}</Button>
      </Box>

      <Box sx={{my: 3}} />

      <Typography sx={{textAlign: 'center'}} fontSize={'lg'}>Already have an account? <a href="/login">Login</a></Typography>

      </Container>
    </Box>
  );
};

RegistrationChoicePage.propTypes = {};

export default RegistrationChoicePage;