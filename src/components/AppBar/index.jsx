import Box from '@mui/material/Box';
import React from 'react';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg';
import { Typography } from '@mui/material';
import Workspaces from './Menu/Workspaces';
import Recent from './Menu/Recent';
import Starred from './Menu/Starred';
import Templates from './Menu/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Profiles from './Menu/Profiles';

const AppBar = () => {
    return (
        <Box px={2} sx={{
            width: '100%',
            height: (theme) => theme.trello.appBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }} >
            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                <AppsIcon sx={{color: 'primary.main'}} />
                <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
                    <SvgIcon component={TrelloLogo} inheritViewBox sx={{color: 'primary.main'}} />
                    <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main'}}>Trello</Typography>
                </Box>

                <Workspaces />
                <Recent />
                <Starred />
                <Templates />
                <Button variant="outlined">Create</Button>
            </Box>

            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                <TextField id="outlined-search" label="Search" type="search" size='small' />
                <ModeSelect />
                <Tooltip title="Notification">
                    <Badge variant="dot" color="primary" sx={{cursor: 'pointer'}} >
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help" sx={{cursor: 'pointer'}}>
                    <HelpIcon />
                </Tooltip>
                <Profiles />
            </Box>
        </Box>
    );
};

export default AppBar;