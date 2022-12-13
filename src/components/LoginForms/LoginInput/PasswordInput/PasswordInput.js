import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';


export const ButtonRegistr = styled(Button)({
  width: '300px',
  backgroundColor: '#24CCA7',
  borderRadius: '20px',
  height: '50px',
  '&:hover': {
    backgroundColor: '#4a56e2',
  },
});

export const ButtonLogin = styled(Button)({
  width: '300px',
  border: '1px solid #4A56E2',
  color: '#4A56E2',
  borderRadius: '20px',
  height: '50px',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#4a56e2',
  },
});

export const BoxBottoms = styled(Box)({
  width: '220px',
  height: '120px',
  margin: '50px 0px 0px 0px',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const InputForm = styled(FormControl)({
  '&:hover': {
    color: '#4a56e2',
  },
});

export const InputLabelForm = styled(Input)({
  borderBottom: '2px solid #e7eaf2',
  '&::before': {
    borderBottom: 'none',
  },
});

export const InputLabelName = styled(InputLabel)({
  color: '#E0E0E0',
});
export const IconColorButtom = styled(IconButton)({
  color: '#E0E0E0',
});