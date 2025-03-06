import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import { Box, Tooltip } from '@mui/material';
import Chip from '@mui/material/Chip';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';

const MENU_STYLES = {
    color: 'primary.main',
    bgcolor: 'white',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
        color: 'primary.main'
    },
    '&:hover': {
        bgcolor: 'primary.50'
    },
}

const BoardBar = () => {
    return (
        <Box sx={{
            width: '100%',
            height: (theme) => theme.trello.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflowX: 'auto',
            gap: 2,
            paddingX: 2,
            borderTop: '1px solid #00bfa5'
        }} >
            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                <Chip 
                    sx={MENU_STYLES}
                    label="Haipham MERN Stack Board" 
                    icon={<DashboardIcon />} 
                    clickable  
                />
                <Chip 
                    sx={MENU_STYLES}
                    label="Public/Private Workspace" 
                    icon={<VpnLockIcon />} 
                    clickable  
                />
                <Chip 
                    sx={MENU_STYLES}
                    label="Add To Google Drive" 
                    icon={<AddToDriveIcon />} 
                    clickable  
                />
                <Chip 
                    sx={MENU_STYLES}
                    label="Automation" 
                    icon={<BoltIcon />} 
                    clickable  
                />
                <Chip 
                    sx={MENU_STYLES}
                    label="Filter" 
                    icon={<FilterListIcon />} 
                    clickable  
                />
            </Box>
            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
                <AvatarGroup 
                    max={4}
                    sx={{
                        '& .MuiAvatar-root': {
                            width: '34px',
                            height: '34px'
                        }
                    }}
                >
                    <Tooltip title="haipham" >
                        <Avatar 
                            alt="haipham" 
                            src="https://yt3.ggpht.com/Ok4OCcMOjs-0h-xR7Hl5rjL_sUXTfJoPIR4veIqln8ToMJsTx2cowgcDzGNEM0_GzX7RF9BWdw=s88-c-k-c0x00ffffff-no-rj" 
                        />
                    </Tooltip>
                    <Tooltip title="haipham" >
                        <Avatar 
                            alt="haipham" 
                            src="https://yt3.ggpht.com/Ok4OCcMOjs-0h-xR7Hl5rjL_sUXTfJoPIR4veIqln8ToMJsTx2cowgcDzGNEM0_GzX7RF9BWdw=s88-c-k-c0x00ffffff-no-rj" 
                        />
                    </Tooltip>
                    <Tooltip title="haipham" >
                        <Avatar 
                            alt="haipham" 
                            src="https://yt3.ggpht.com/Ok4OCcMOjs-0h-xR7Hl5rjL_sUXTfJoPIR4veIqln8ToMJsTx2cowgcDzGNEM0_GzX7RF9BWdw=s88-c-k-c0x00ffffff-no-rj" 
                        />
                    </Tooltip>
                    <Tooltip title="haipham" >
                        <Avatar 
                            alt="haipham" 
                            src="https://yt3.ggpht.com/Ok4OCcMOjs-0h-xR7Hl5rjL_sUXTfJoPIR4veIqln8ToMJsTx2cowgcDzGNEM0_GzX7RF9BWdw=s88-c-k-c0x00ffffff-no-rj" 
                        />
                    </Tooltip>
                    <Tooltip title="haipham" >
                        <Avatar 
                            alt="haipham" 
                            src="https://yt3.ggpht.com/Ok4OCcMOjs-0h-xR7Hl5rjL_sUXTfJoPIR4veIqln8ToMJsTx2cowgcDzGNEM0_GzX7RF9BWdw=s88-c-k-c0x00ffffff-no-rj" 
                        />
                    </Tooltip>
                    <Tooltip title="haipham" >
                        <Avatar 
                            alt="haipham" 
                            src="https://yt3.ggpht.com/Ok4OCcMOjs-0h-xR7Hl5rjL_sUXTfJoPIR4veIqln8ToMJsTx2cowgcDzGNEM0_GzX7RF9BWdw=s88-c-k-c0x00ffffff-no-rj" 
                        />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
};

export default BoardBar;