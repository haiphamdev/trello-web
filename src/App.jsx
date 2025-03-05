import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
       
        <MenuItem value='light'>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}} >
            <LightModeIcon fontSize="small"/>
            Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}} >
            <DarkModeOutlinedIcon/>
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}} >
            <SettingsBrightnessIcon />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  // console.log('prefersDarkMode:', prefersDarkMode);
  // console.log('prefersLightMode:', prefersLightMode);
  
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {

  return (
    <>
    <ModeSelect />
    <hr />
    <ModeToggle />
    <hr />
    <Typography variant='body2' color="text.secondary"  >aa</Typography>
      <h1>Hello</h1>
      <Button variant="contained" color='success' >Hello world</Button>
      <AddAPhotoIcon sx={{color:'red'}} />
    </>
  )
}

export default App
