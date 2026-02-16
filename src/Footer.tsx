import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

const Footer = () => {
  const socials = [
    { icon: GitHubIcon, url: 'https://github.com' },
    { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/aneerudh-prabhakaran/' },
    { icon: DescriptionIcon, url: '/resume.pdf' },
  ];

  return (
    <Box sx={{ py: 3, textAlign: 'center' }}>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2, display: { md: 'none' } }}>
        {socials.map((social, index) => (
          <IconButton
            key={index}
            component={Link}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            size="small"
          >
            <social.icon />
          </IconButton>
        ))}
      </Stack>
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
