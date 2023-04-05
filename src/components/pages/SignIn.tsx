import { Container } from '@mui/material'
import AtelieurBrand from '../molecules/AtelieurBrand'
import SignInForm from '../organisms/SignInForm'

function Landing(): JSX.Element {
    return (
        <Container sx={{
            display: 'grid',
            gap: 1,
            justifyItems: 'center',
        }}>
            <AtelieurBrand disableLightLogo />
            <SignInForm />
        </Container>
    )
}

export default Landing