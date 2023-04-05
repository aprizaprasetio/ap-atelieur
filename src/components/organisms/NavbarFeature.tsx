import FeatureItem, { FeatureItem as FeatureItemType } from '../molecules/FeatureItem'
import { Drawer, Toolbar }
    from '@mui/material'

function NavbarFeature({ items }: { items: FeatureItemType[] }): JSX.Element {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 200,
                flexShrink: 0,
            }}
            PaperProps={{
                sx: {
                    zIndex: 0,
                }
            }}
        >
            <Toolbar />
            {items.map((x, i) => (
                <FeatureItem key={i} {...x} />
            ))}
        </Drawer>
    )
}

export default NavbarFeature