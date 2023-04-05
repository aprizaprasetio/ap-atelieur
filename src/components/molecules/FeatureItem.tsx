import { useNavigate, useLocation } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material'

export interface FeatureItem {
    label: string,
    href: string,
    icon: typeof SvgIcon
}
function FeatureItem(props: FeatureItem) {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <ListItem sx={{
            borderRight: (pathname === props.href) ? 2 : undefined,
            borderColor: 'primary.main'
        }}>
            <ListItemButton onClick={(): void => navigate(props.href)}>
                <ListItemIcon><props.icon /></ListItemIcon>
                <ListItemText>{props.label}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

export default FeatureItem