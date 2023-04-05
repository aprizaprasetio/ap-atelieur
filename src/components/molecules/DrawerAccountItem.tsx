import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material'

interface drawerAccountItem {
    icon: typeof SvgIcon,
    label: string,
    onClick?: (e: MouseEvent<HTMLDivElement>) => void,
    href?: string,
}

function DrawerAccountItem(props: drawerAccountItem): JSX.Element {
    if (props.href === undefined && props.onClick === undefined)
        return (
            <ListItemButton disabled>
                <ListItemIcon>
                    <props.icon />
                </ListItemIcon>
                <ListItemText>
                    {props.label}
                </ListItemText>
            </ListItemButton>
        )

    return (
        <ListItem disablePadding>
            {(props.href === undefined) ? (
                <ListItemButton onClick={props.onClick}>
                    <ListItemIcon>
                        <props.icon />
                    </ListItemIcon>
                    <ListItemText>
                        {props.label}
                    </ListItemText>
                </ListItemButton>
            ) : (
                <Link to={props.href}>
                    <ListItemIcon>
                        <props.icon />
                    </ListItemIcon>
                    <ListItemText>
                        {props.label}
                    </ListItemText>
                </Link>
            )}
        </ListItem>
    )
}

export default DrawerAccountItem