import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { styled } from '@mui/system';

export const InputForm = styled(FormControl)({
  '&:hover': {
    color: '#4a56e2',
  },
  
});

export const InputLabelName = styled(InputLabel)({
  color: '#E0E0E0',
  
});

export const InputLabelForm = styled(Input)({
  borderBottom: '2px solid #e7eaf2',
  '&::before': {
    borderBottom: 'none',
  },
});