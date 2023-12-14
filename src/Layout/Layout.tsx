import {NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <div className={styles.navigation}>
                <nav className={styles.links}>
                    <NavLink to='/'
                        style={({isActive}) => {
                            return {
                                color: isActive ? 'blue' : 'white'
                            }
                    }}>
                        Home &nbsp;
                    </NavLink>
                    <NavLink to='/my-items'
                             style={({isActive}) => {
                                 return {
                                     color: isActive ? 'blue' : 'white'
                                 }
                             }}>
                        My Items &nbsp;
                    </NavLink>
                    <NavLink to='/about'
                             style={({isActive}) => {
                                 return {
                                     color: isActive ? 'blue' : 'white'
                                 }
                             }}>
                        About &nbsp;
                    </NavLink>
                </nav>
            </div>

            {/*content placeholder*/}
            <Outlet/>
        </>
    );
};

export default Layout;