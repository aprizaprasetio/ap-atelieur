import { Card, CardMedia } from '@mui/material'
import { HomeBanner } from 'src/assets'

function PageHome() {
    return (
        <Card>
            <CardMedia
                component='img'
                image={HomeBanner}
            />
        </Card>
    )
}

export default PageHome