import { useState, ReactEventHandler, useEffect } from 'react'
import { SwipeableDrawer, Box, List } from '@mui/material'
import { AccountCircle, Logout } from '@mui/icons-material'
import firebase from '../../backend/firebaseConfig'
import DrawerAccountItem from '../molecules/DrawerAccountItem'

interface DrawerAccount {
    open: boolean,
    onOpen: ReactEventHandler,
}


function DrawerAccount({ open, onOpen }: DrawerAccount): JSX.Element {
    const [userName, setUserName] = useState<string | null>(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((userCredential): void => {
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
                    <DrawerAccountItem label={'Sign Out'} icon={Logout} onClick={() => firebase.auth().signOut()} />
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default DrawerAccount