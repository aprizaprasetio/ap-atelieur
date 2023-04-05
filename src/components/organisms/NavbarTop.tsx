import { MouseEvent } from 'react'
import { Box, AppBar, Toolbar, IconButton, Avatar } from '@mui/material'
import AtelieurBrand from '../molecules/AtelieurBrand'

interface NavbarTop {
    avatarOnClick: (e: MouseEvent<HTMLButtonElement>) => void,
}

function NavbarTop({ avatarOnClick }: NavbarTop): JSX.Element {
    return (
        <AppBar position='sticky'>
            <Toolbar sx={{ justifyContent: 'space-between' }} variant='dense'>
                <AtelieurBrand />
                <IconButton onClick={avatarOnClick}>
                    <Avatar />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarTop