import { LinearProgress } from '@mui/material'

function LinearLoading() {
    return (
        <LinearProgress sx={{
            position: 'fixed',
            width: '100vw',
            bottom: 0,
            left: 0,
        }} />
    )
}

export default LinearLoading