import { MouseEvent } from 'react'
import { AppBar, Toolbar, IconButton, Avatar } from '@mui/material'
import AtelieurBrand from '../molecules/AtelieurBrand'

interface INavbarTop {
    avatarOnClick: (e: MouseEvent<HTMLButtonElement>) => void,
}

function NavbarTop({ avatarOnClick }: INavbarTop): JSX.Element {
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