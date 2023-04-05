import { Box, Card, CardMedia, CardContent, CardActions, TextField, Typography, Button, IconButton, InputAdornment } from '@mui/material'
import { Email, Key, Visibility, VisibilityOff } from '@mui/icons-material'
import { useInput } from '../../hooks/form'
import { useTrigger } from '../../hooks/ui'
import { useAuth } from '../../hooks/authentication'
import bentoCake from '../../assets/landing-page-bento.webp'
import IconInputAdornment from '../molecules/IconInputAdornment'

function SignInForm(): JSX.Element {
    const [isPasswordVisible, isPasswordVisibleTrigger] = useTrigger()

    const [email, emailHandler] = useInput()
    const [password, passwordHandler] = useInput()

    const { errorMessage, signInHandler } = useAuth(email, password)

    return (
        <Card onSubmit={signInHandler} component='form' sx={{
            width: {
                xs: '100%',
                sm: '80%',
                lg: '25%',
            },
        }}>
            <CardMedia component='img' image={bentoCake} />
            <Box padding={1} color={errorMessage ? 'error.main' : 'primary.main'}>
                <Typography fontWeight='light' textAlign='center'>
                    {errorMessage ?? 'Welcome to Atelieur Management Web App.'}
                </Typography>
            </Box>
            <CardContent sx={{
                padding: 3,
                display: 'grid',
                gap: 1,
            }}>
                <TextField
                    value={email}
                    onChange={emailHandler}
                    placeholder='Email'
                    size='small'
                    fullWidth
                    InputProps={{
                        startAdornment: <IconInputAdornment icon={Email} />,
                    }}
                />
                <TextField
                    value={password}
                    onChange={passwordHandler}
                    placeholder='Password'
                    type={isPasswordVisible ? 'text' : 'password'}
                    size='small'
                    autoComplete='off'
                    fullWidth
                    InputProps={{
                        startAdornment: <IconInputAdornment icon={Key} />,
                        endAdornment: (
                            <InputAdornment position='end' sx={{ display: (password.length <= 0) ? 'none' : 'flex' }}>
                                <IconButton onClick={isPasswordVisibleTrigger}>
                                    {isPasswordVisible ? (
                                        <Visibility opacity={.66} />
                                    ) : (
                                        <VisibilityOff opacity={.66} />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </CardContent>
            <CardActions>
                <Button type='submit' variant='contained' fullWidth>Sign In</Button>
            </CardActions>
        </Card>
    )
}

export default SignInForm