import Button from '@mui/material/Button';
const FormBtn = ({
  title = '',
  variant = 'contained',
  type = 'button',
  color = 'primary',
  href = '',
  disabled = false,
  mb = '20px',
  width = '300px',
  style,
}) => {
  return (
    <Button
      className={style}
      variant={variant}
      type={type}
      disabled={disabled}
      href={href}
      style={{
        width: `${width}`,
        height: '50px',
        borderRadius: '20px',
        backgroundColor: `${color}`,
        marginBottom: `${mb}`,
      }}
    >
      {title}
    </Button>
  );
};

export default FormBtn;
