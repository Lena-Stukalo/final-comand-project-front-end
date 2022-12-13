import InputAdornment from '@mui/material/InputAdornment';
import { InputForm, InputLabelForm } from './Input.styles';
import { FormHelperText } from '@mui/material';
import { ReactComponent as EmailIcon } from '../../../../images/envelop-icon.svg';

const Input = ({
  icon = null,
  label = '',
  value,
  mb = 0,
  id = '',
  onChange,
  error,
  helper,
}) => {
  return (
    <InputForm
      variant="standard"
      style={{ width: '100%', marginBottom: `${mb}px` }}
    >
      <InputLabelForm
        onChange={onChange}
        type="email"
        id={id}
        name={id}
        value={value}
        error={error}
        placeholder={label}
        startAdornment={
          <InputAdornment position="start">
            {icon ? icon : <EmailIcon />}
          </InputAdornment>
        }
      />
      {error && (
        <FormHelperText name={id} style={{ color: 'red' }}>
          {helper}
        </FormHelperText>
      )}
    </InputForm>
  );
};
export default Input;
