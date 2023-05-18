import { Box, Chip, Stack, Typography } from '@mui/material'
import { AtelieurLogoLight, AtelieurLogoDark } from 'src/assets'

interface IAtelieurBrand {
    disableLogo?: boolean,
    disableLightLogo?: boolean,
}

function AtelieurBrand(props: IAtelieurBrand): JSX.Element {
    return (
        <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
            {props.disableLogo ? (
                <Typography fontSize={20} fontWeight='bold'>Atelieur</Typography>
            ) : (
                <Box
                    component='img'
                    src={props.disableLightLogo ? AtelieurLogoDark : AtelieurLogoLight}
                    sx={{ height: 30 }}
                />
            )}
            <Chip label='Web App' color='secondary' size='small' />
        </Stack>
    )
}

export default AtelieurBrand