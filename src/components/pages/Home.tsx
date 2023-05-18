import { Home as HomeIcon, Paid, ShoppingBag } from '@mui/icons-material'
import NavbarTop from '../organisms/NavbarTop'
import useTrigger from '../../hooks/useTrigger'
import NavbarFeatureWrapper from '../templates/NavbarFeatureWrapper'
import { FeatureItemType } from 'src/types/component'
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
    const [isDrawerAccountVisible, isDrawerAccountVisibleTrigger] = useTrigger({ initialValue: false })

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