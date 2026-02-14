import { Icon } from '@mui/material';

const IconLogo = () => (
  <Icon sx={{ width: 'auto', height: '42px', display: 'flex' }}>
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <g transform="translate(11.000000, 5.000000)">
          <polygon
            id="Shape"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="39 0 0 22 0 67 39 90 78 67 78 22"
          ></polygon>
          <text
            fill="currentColor"
            fontFamily="Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif"
            fontSize="50"
            fontWeight="500"
          >
            <tspan x="23" y="63">
              A
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  </Icon>
);

export default IconLogo;
