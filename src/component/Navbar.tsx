import React, { useState } from 'react'
import {Link} from 'react-scroll/modules'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Image from 'next/image'
interface NavItem {
  label: string
  page: string
}
const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Products',
    page: 'products'
  },
  {
    label: 'Contacts',
    page: 'contacts',
  },
]
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const pathname = usePathname()
  const [navBar, setNavBar] = useState(false);
  return <header className='w-full mx-auto px-4 bg-white shadow sm:px-20 sticky top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600 dark:white'>
    <div className='justify-between md:items-center md:flex'>
      <div>
        <div className='flex items-center justify-between py-3'>
          <div className='flex md:py-5 md:black'>
            <Image src={'/logo.png'} width={30} height={0.65} alt="logo" />
            <h2 className='text-2xl font-bold'>Kaulantech</h2>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setNavBar(!navBar)}>{(navBar) ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}</button>
          </div>
        </div>
      </div>
      <div className={`flex justify-self-center pb-3 md:pb-0 md:mt-0 md:block ${(navBar) ? "block" : "hidden"}`}>

        <div className='md:flex items-center justify-center md:space-x-6 space-y-8  md:space-y-0'>
          {NAV_ITEMS.map((item, idx) => {
            return <Link key={idx}
              to={item.page}
              className='block md:my-auto text-neutral-900 hover:text-neutral-500 dark:text-neutral-100'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {setNavBar(!navBar)}}
            >{item.label}</Link>
          })}
          {currentTheme === 'dark' ? (
            <button onClick={() => setTheme('light')} className='bg-slate-100 p-2 rounded-xl'>
              <RiSunLine color='black' size={25} />
            </button>
          ) : (
            <button onClick={() => setTheme('dark')} className='bg-slate-100 p-2 rounded-xl'>
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </div>
  </header>
}
// const styles = {
//   navbar: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginHorizontal: 'auto',
//     padding: 5,
//     backgroundColor: 'blue'
//   },
//   navLink: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '1.5rem',
//     marginInline: '2rem',
//     opacity: 0.9,
//     paddingLeft: '1rem',
//     paddingRight: '1rem',
//   },
//   activeNav: {
//     backgroundColor: 'gray',
//     paddingLeft: '1rem',
//     paddingRight: '1rem',
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '1.5rem',
//     marginInline: '2rem',
//     opacity: 0.8,
//   },
//   text: {
//     opacity: 1,
//   }
// }
export default Navbar