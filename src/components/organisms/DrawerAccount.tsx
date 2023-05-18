import { useState, ReactEventHandler, useEffect } from 'react'
import { SwipeableDrawer, Box, List } from '@mui/material'
import { AccountCircle, Logout } from '@mui/icons-material'
import firebaseApp from 'src/api/client/firebaseApp'
import DrawerAccountItem from '../molecules/DrawerAccountItem'

interface IDrawerAccount {
    open: boolean,
    onOpen: ReactEventHandler,
}

function DrawerAccount({ open, onOpen }: IDrawerAccount): JSX.Element {
    const [userName, setUserName] = useState<string | null>(null)

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((userCredential): void => {
            setUserName(userCredential?.displayName ?? null)
        })
    }, [])

    return (
        <SwipeableDrawer
            anchor='right'
            open={open}
            onOpen={onOpen}
            onClose={onOpen}
        >
            <Box
                width={250}
                role='presentation'
                onClick={onOpen}
                onKeyDown={onOpen}
            >
                <List>
                    <DrawerAccountItem label={userName ?? 'User'} icon={AccountCircle} />
                    <DrawerAccountItem label={'Sign Out'} icon={Logout} onClick={() => firebaseApp.auth().signOut()} />
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default DrawerAccount