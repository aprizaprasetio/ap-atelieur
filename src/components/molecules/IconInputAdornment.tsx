import { InputAdornment, SvgIcon } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon'

interface IconInputAdornment {
    icon: typeof SvgIcon,
    position?: 'start' | 'end',
    iconProps?: SvgIconProps,
}

function IconInputAdornment(props: IconInputAdornment): JSX.Element {
    return (
        <InputAdornment position={props.position ?? 'start'}>
            <props.icon {...props.iconProps} />
        </InputAdornment>
    )
}


export default IconInputAdornment