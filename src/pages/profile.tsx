import { Box } from '@mui/material';
import React from 'react';
import ProfileColumn from './profileColumn';
import InfoColumn from './infoColumn';


export const Profile = () => {
 return (
<Box>
    <Box>
        <ProfileColumn></ProfileColumn>
    </Box>
    <Box>
        <InfoColumn></InfoColumn>
    </Box>
</Box>

);
};

export default Profile;