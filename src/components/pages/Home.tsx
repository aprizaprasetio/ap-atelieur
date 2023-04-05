import { Home as HomeIcon, Paid, ShoppingBag } from '@mui/icons-material'
import NavbarTop from '../organisms/NavbarTop'
import { useTrigger } from '../../hooks/ui'
import NavbarFeatureWrapper from '../templates/NavbarFeatureWrapper'
import NavbarFeature from '../organisms/NavbarFeature'
import { FeatureItem as FeatureItemType } from '../molecules/FeatureItem'
import DrawerAccount from '../organisms/DrawerAccount'
import PageHome from '../organisms/PageHome'

const featureItems: FeatureItemType[] = [
    {
        label: 'Home',
        href: '/',
        icon: HomeIcon,
    },
    {
        label: 'Income',
        href: '/income',
        icon: Paid,
    },
    {
        label: 'Expenses',
        href: '/expenses',
        icon: ShoppingBag,
    },
]

function Home(): JSX.Element {
    const [isDrawerAccountVisible, isDrawerAccountVisibleTrigger] = useTrigger()

    return (
        <>
            <DrawerAccount open={isDrawerAccountVisible} onOpen={isDrawerAccountVisibleTrigger} />
            <NavbarTop avatarOnClick={isDrawerAccountVisibleTrigger} />
            <NavbarFeatureWrapper items={featureItems}>
                <PageHome />
            </NavbarFeatureWrapper >
        </>
    )
}

export default Home