import { useNavigate, useLocation } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { FeatureItemType } from 'src/types/component'

function FeatureItem(props: FeatureItemType) {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <ListItem sx={{
            borderRight: (pathname === props.href) ? 2 : undefined,
            borderColor: 'primary.main',
            padding: 0,
        }}>
            <ListItemButton onClick={(): void => navigate(props.href)} sx={{
                paddingX: 3,
            }}>
                <ListItemIcon><props.icon /></ListItemIcon>
                <ListItemText>{props.label}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

export default FeatureItem