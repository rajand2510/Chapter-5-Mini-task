import { Link, useLocation } from 'react-router-dom'
import { useTheme } from './ThemeContext'
const navLinks = [
    { path: '/', label: 'Login Dashboard', tab: 'Login Dashboard' },
    { path: '/ProductList', label: 'ProductList', tab: 'ProductList' },
     { path: '/cart', label: 'Cart', tab: 'Cart' },
    { path: '/News', label: 'News', tab: 'News' },
    { path: '/userlist', label: 'userlist', tab: 'userlist' },
    { path: '/sum', label: 'Sum(useCallback & useMemo)', tab: 'Sum' },
    { path: '/product', label: 'Product', tab: 'Product' },
    { path: '/local', label: 'LocalStorage', tab: 'LocalStorage' },
   
]

const Navbar = () => {
    const location = useLocation()
    const activeTab = navLinks.find(link => link.path === location.pathname)?.tab || ''
    const { theme, selectTheme } = useTheme();


    return (
        <nav className={`h-18 flex flex-row gap-5 items-center px-4 shadow-lg`} style={{ backgroundColor: theme.backgroundColor }}>
            <div className='mr-10' style={{ color: theme.textColor }} >
                Chapter 4 Mini Task
            </div>
            {navLinks.map(link => (
                <Link
                    key={link.path}
                    className={`text-white p-2${activeTab === link.tab ? ' font-semibold border-b' : ''}`}
                    style={{ color: theme.textColor }}
                    to={link.path}
                >
                    {link.label}
                </Link>
            ))}
            <button className='bg-gray-200/50 p-2 rounded-xl text-xs'  style={{ color: theme.textColor }} onClick={() => selectTheme('light')}>Light Theme</button>
            <button className='bg-gray-200/50 p-2 rounded-xl text-xs' style={{ color: theme.textColor }} onClick={() => selectTheme('dark')}>Dark Theme</button>
            <button className='bg-gray-200/50 p-2 rounded-xl text-xs' style={{ color: theme.textColor }} onClick={() => selectTheme('blue')}>Blue Theme</button>
        </nav>
    )
}

export default Navbar