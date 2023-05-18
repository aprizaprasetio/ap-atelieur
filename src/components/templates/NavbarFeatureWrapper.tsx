import { ReactNode } from 'react'
import { Box, Container, Divider } from '@mui/material'
import NavbarFeature from '../organisms/NavbarFeature'
import { FeatureItemType } from 'src/types/component'

interface NavbarFeatureWrapper {
    items: FeatureItemType[],
    children: ReactNode,
}

function NavbarFeatureWrapper({ items, children }: NavbarFeatureWrapper): JSX.Element {
    return (
        <Box display='flex'>
            <NavbarFeature items={items} />
            <Container sx={{
                display: 'grid',
                gap: 1,
                flexGrow: 1,
            }}>
                <Divider sx={{ backgroundColor: 'transparent' }} />
                {children}
            </Container>
        </Box>
    )
}

export default NavbarFeatureWrapper