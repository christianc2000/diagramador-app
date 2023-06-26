import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="ta" onClick={() => console.log('Clic en Tabla')}>Tabla</Button>,
  <Button key="as" onClick={() => console.log('Clic en Asociación')}>Asociación</Button>,
  <Button key="ag" onClick={() => console.log('Clic en Agregación')}>Agregación</Button>,
  <Button key="co" onClick={() => console.log('Clic en Composición')}>Composición</Button>,
  <Button key="ge" onClick={() => console.log('Clic en Generalización')}>Generalización</Button>,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
     <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        fullWidth
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
