import { Card, CardMedia, Paper, Typography } from '@mui/material'
import HomeBanner from '../../assets/home-banner.png'

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