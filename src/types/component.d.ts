import { SvgIcon } from '@mui/material'

export type FeatureItemType = {
    label: string,
    href: string,
    icon: typeof SvgIcon,
}

export type FeatureItemBarType = FeatureItemType & {
    element: () => JSX.Element,
}