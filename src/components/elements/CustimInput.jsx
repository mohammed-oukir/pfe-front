import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const CustimInput = ({...props}) => {
  return (
    <TextField variant='standard' {...props} />
  );
};

CustimInput.propTypes = {};

export default CustimInput;