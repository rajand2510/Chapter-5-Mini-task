import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { path: '/', label: 'Home', tab: 'Home' },
     { path: '/login', label: 'Login', tab: 'Login' },
   { path: '/search', label: 'Search', tab: 'Search' },
]

const Navbar = () => {
    const location = useLocation()
    const activeTab = navLinks.find(link => link.path === location.pathname)?.tab || ''
   


    return (
        <nav className={`h-18 flex flex-row gap-5 items-center px-4 shadow-lg bg-black`} >
            <div className='mr-10 text-white'  >
                Chapter 5 Mini Task
            </div>
            {navLinks.map(link => (
                <Link
                    key={link.path}
                    className={`text-white p-2 ${activeTab === link.tab ? ' font-semibold border-b' : ''}`}
                    style={{ color:'#ffffff' }}
                    to={link.path}
                >
                    {link.label}
                </Link>
            ))}
            </nav>
    )
}

export default Navbar