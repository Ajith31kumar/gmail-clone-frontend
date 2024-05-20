import { Box, Typography, styled, Divider } from '@mui/material';

const Component = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '50px',
  opacity: '0.8',
  width: '100%'
});

const StyledDivider = styled(Divider)({
  width: '100%',
  marginTop: 10
});

const NoMails = ({ message }) => {
  const defaultHeading = 'No Mails Available';
  const defaultSubHeading = 'You have no new messages';

  return (
    <Component>
      <Typography>{message?.heading || defaultHeading}</Typography>
      <Typography>{message?.subHeading || defaultSubHeading}</Typography>
      <StyledDivider />
    </Component>
  );
};

export default NoMails;
