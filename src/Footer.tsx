import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        Designed & Built by{' '}
        <Link href="#" color="primary">
          Aneerudh
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
