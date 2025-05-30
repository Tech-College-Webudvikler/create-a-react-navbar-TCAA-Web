import { NavLink } from 'react-router'

/**
 * Navigation component that renders a navigation bar with links to different pages.
 *
 * Each link is styled based on its active state:
 * - Active links are displayed with white text.
 * - Inactive links are displayed with gray text and change to white on hover.
 *
 * The navigation bar includes links to the following pages:
 * - Home
 * - About
 * - Contact
 * - Services
 * - Blog
 *
 * @returns A JSX element representing the navigation bar.
 */
export const Navigation = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <ul>
        <li className='inline-block mr-4'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'text-white' : 'text-gray-400 hover:text-white')}
          >
            Home
          </NavLink>
        </li>
        <li className='inline-block mr-4'>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'text-white' : 'text-gray-400 hover:text-white')}
          >
            About
          </NavLink>
        </li>
        <li className='inline-block mr-4'>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? 'text-white' : 'text-gray-400 hover:text-white')}
          >
            Contact
          </NavLink>
        </li>
        <li className='inline-block mr-4'>
          <NavLink
            to='/services'
            className={({ isActive }) => (isActive ? 'text-white' : 'text-gray-400 hover:text-white')}
          >
            Services
          </NavLink>
        </li>
        <li className='inline-block mr-4'>
          <NavLink
            to='/blog'
            className={({ isActive }) => (isActive ? 'text-white' : 'text-gray-400 hover:text-white')}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
