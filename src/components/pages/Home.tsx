import { useLocation } from 'react-router-dom'
import useTrigger from '../../hooks/useTrigger'
import featureItemsConfig from 'src/config/featureItemsConfig'
import NavbarTop from '../organisms/NavbarTop'
import NavbarFeatureWrapper from '../templates/NavbarFeatureWrapper'
import DrawerAccount from '../organisms/DrawerAccount'

function Home(): JSX.Element {
    const { pathname } = useLocation()
    const [isDrawerAccountVisible, isDrawerAccountVisibleTrigger] = useTrigger({ initialValue: false })

    return (
        <>
            <DrawerAccount open={isDrawerAccountVisible} onOpen={isDrawerAccountVisibleTrigger} />
            <NavbarTop avatarOnClick={isDrawerAccountVisibleTrigger} />
            <NavbarFeatureWrapper items={featureItemsConfig}>
                {featureItemsConfig.map(item => (
                    (item.href === pathname) && <item.element key={item.href} />
                ))}
            </NavbarFeatureWrapper >
        </>
    )
}

export default Home