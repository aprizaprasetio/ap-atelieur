import { Drawer, Toolbar } from '@mui/material'
import FeatureItem from '../molecules/FeatureItem'
import { FeatureItemType } from 'src/types/component'

interface INavbarFeature {
    items: FeatureItemType[],
}

function NavbarFeature({ items }: INavbarFeature): JSX.Element {
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