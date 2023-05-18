import { Home, ShoppingBag } from '@mui/icons-material'
import { FeatureItemBarType } from 'src/types/component'
import PageHome from 'src/components/pages/PageHome'
import Expenses from 'src/components/pages/Expenses'

const featureItemsConfig: FeatureItemBarType[] = [
    {
        label: 'Home',
        href: '/',
        icon: Home,
        element: PageHome,
    },
    {
        label: 'Expenses',
        href: '/expenses',
        icon: ShoppingBag,
        element: Expenses,
    },
]

export default featureItemsConfig