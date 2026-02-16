import { Box, Link, Tooltip, Zoom } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { clarity } from 'react-microsoft-clarity';

const socials = [
  { icon: GitHubIcon, url: 'https://github.com', name: 'GitHub' },
  { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/aneerudh-prabhakaran/', name: 'LinkedIn' },
  { icon: DescriptionIcon, url: '/resume.pdf', name: 'Resume' },
];

const SideSocials = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: { xs: 20, md: 40 },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        zIndex: 10,
      }}
    >
      {socials.map((social, index) => (
        <Tooltip key={index} title={social.name} placement="right" TransitionComponent={Zoom} arrow>
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            onClick={() => clarity.event(`click_${social.name.toLowerCase()}`)}
            sx={{
              color: 'text.secondary',
              transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-3px)',
              },
              display: 'flex',
              p: 1,
            }}
          >
            <social.icon sx={{ fontSize: '22px' }} />
          </Link>
        </Tooltip>
      ))}
      <Box
        sx={{
          width: '1px',
          height: '90px',
          backgroundColor: 'text.secondary',
        }}
      />
    </Box>
  );
};

export default SideSocials;
