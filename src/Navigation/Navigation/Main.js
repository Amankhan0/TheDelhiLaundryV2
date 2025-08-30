import React, { useEffect, useState } from 'react'
import Routes from '../Routes';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown, ChevronRight } from '../../Constant/Icons/Icon';
import Links from '../Links';
import { setSidebar } from '../../Store/Action/Sidebar/SidebarAciton';
import Switcher from '../../Component/Switcher';
import { NavLink, useLocation } from "react-router-dom";
import MainLogo from '../../logowhite.png';
import { Mail, Phone } from 'lucide-react';
import Footer from './Footer';

const SidebarItem = ({ item, onClick }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasSubItems = item.child && item.child.length > 0;

  var url = window.location.pathname

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };

  return (
    <li className='text-slate-600'>
      {
        hasSubItems ?
          <div>
            <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" onClick={handleSubMenuToggle}>
              <span className="flex px-3.5 py-3.5">{item.icon}&nbsp;{item.title}</span>
              {isSubMenuOpen ? ChevronDown : ChevronRight}
            </button>
            {isSubMenuOpen && (
              <ul>
                {item.child.map((subItem, index) => (
                  <SidebarItem key={index} item={subItem} onClick={onClick} />
                ))}
              </ul>
            )}
          </div>
          : <div>
            <NavLink to={item.url} className={`${url === (item.url) ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}  px-3.5 ${'windowUrl' === item.url ? 'text-primary' : ''} py-3.5 nav-link ${item.color !== undefined ? item.color : ''} flex py-2 text-sm  items-center tracking-wide outline-none transition-colors duration-300 ease-in-out hover:bg-primary/10 hover:text-primary hover:border-l-4 hover:border-primary hover:cursor-pointer hover:font-semibold dark:text-navy-200 dark:hover:text-navy-50`}>{item.icon}&nbsp;{item.title}</NavLink>
            {item._id === 99 ? <div className="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div> : null}
          </div>
      }
    </li>
  );
};

export default function Main() {
  const dispatch = useDispatch()
  const reduxSidebar = useSelector(state => state.SidebarReducer)
  const [localNav, setLocalNav] = useState(Links)
  const [path, setPath] = useState(Links)
  const [render, setRender] = useState(null)
  const location = useLocation()

  var theme = localStorage.getItem('theme')

  const handleSidebar = (value) => {
    dispatch(setSidebar(value))
  }

  useEffect(() => {
    setRender(reduxSidebar.timestamp)
    setPath(location.pathname);
  }, [location.pathname, reduxSidebar, theme, render])


  return (
    <div className='text-black bg-white dark:text-white dark:bg-black'>
      <div className={reduxSidebar?.doc}>
        <div id="root" className="dark:text-white min-h-100vh flex grow bg-slate-50 dark:bg-navy-900 relative overflow-hidden" >
          <div className="sidebar sidebar-panel print:hidden">
            <div className="flex h-full grow flex-col border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-750">
              <div className="flex justify-between px-3 pt-4 pb-2" style={{ borderBottom: '1px solid lightgrey' }}>
                <img className={'w-[20%] h-[50%] self-center'} src={theme === 'light' ? MainLogo : MainLogo} />
                <button className="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80" onClick={() => handleSidebar(reduxSidebar.doc === 'is-sidebar-open' ? '' : 'is-sidebar-open')}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div className="nav-wrapper my-5 h-[calc(100%-4.5rem)] overflow-x-hidden pb-6" data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: '0px 0px -24px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                <div className="simplebar-content-wrapper" tabIndex="0" role="region" aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden' }}><div className="simplebar-content" style={{ padding: '0px 0px 24px' }}>
                  <ul>
                    {localNav.map((item, index) => (
                      item.active ? <SidebarItem key={index} item={item} /> : null
                    ))}
                  </ul>
                </div>
                </div></div></div><div className="simplebar-placeholder" style={{ width: '259px', height: '618px' }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}></div></div></div>
            </div>
          </div>
          <nav className=" header  print:hidden relative flex flex-col" style={{ zIndex: 1000 }}>
            <div className='bg-mainColorLightBlue text-white flex justify-end p-2'>
              <div className='flex gap-5 mr-5'>
                <div className='flex gap-2 items-center'>
                  <Phone size={15} />
                  <p>+91 70110 98300</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <Mail size={15} />
                  <p>thedelhilaundry.com</p>
                </div>
              </div>
            </div>
            <div className="header-container relative flex w-full bg-white dark:bg-black print:hidden">
              <div className="flex w-full items-center justify-between h-20">
                <div className='flex gap-2 items-center'>
                  {
                    window.innerWidth < 700 &&
                    <button className="sidebar-toggle mr-5 flex h-4 w-4 flex-col justify-center space-y-1 text-primary outline-none focus:outline-none dark:text-accent-light/80" onClick={() => handleSidebar(reduxSidebar?.doc === 'is-sidebar-open' ? '' : 'is-sidebar-open')}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  }
                  <div style={{marginTop:window.innerWidth > 600 ?"20px":'',marginLeft:window.innerWidth > 600 ?"30px":''}}>
                    <img className={window.innerWidth > 600 ? 'w-[100px]' : 'w-[70px]'} src={theme === 'light' ? MainLogo : MainLogo} />
                  </div>
                </div>
                <div className="-mr-1.5 flex items-center space-x-2">
                  <div className='flex gap-10 text-lg'>
                    {
                      window.innerWidth > 730 &&
                      <>
                        <NavLink className={`${path === '/' && 'border-b border-b-mainColorLightBlue text-mainColorLightBlue dark:text-mainColorLightBlue'} dark:text-white font-semibold text-base`} to='/'>Home</NavLink>
                        <NavLink className={`${path === '/location' && 'border-b border-b-mainColorLightBlue text-mainColorLightBlue dark:text-mainColorLightBlue'} dark:text-white font-semibold text-base`} to='/location'>Locations</NavLink>
                        <NavLink className={`${path === '/service' && 'border-b border-b-mainColorLightBlue text-mainColorLightBlue dark:text-mainColorLightBlue'} dark:text-white font-semibold text-base`} to='/service'>Services</NavLink>
                        <NavLink className={`${path === '/about' && 'border-b border-b-mainColorLightBlue text-mainColorLightBlue dark:text-mainColorLightBlue'} dark:text-white font-semibold text-base`} to="/about">About us</NavLink>
                        <NavLink className={`${path === '/blogs' && 'border-b border-b-mainColorLightBlue text-mainColorLightBlue dark:text-mainColorLightBlue'} dark:text-white font-semibold`} to='/blogs'>Blogs</NavLink>
                      </>
                    }
                  </div>
                </div>
                <div className='self-center flex gap-6 items-center'>
                  <NavLink to='/contact'>
                    <div className='text-white text-center text-lg rounded-lg bg-mainColorLightBlue w-[120px] p-2'>
                      <p>Contact</p>
                    </div>
                  </NavLink>
                  <Switcher size={window.innerWidth > 500 ? 26 : 20} />
                </div>
              </div>
            </div>
          </nav>
          <main className="w-full main-content text-black bg-white dark:text-white dark:bg-black">
            <div className="space-x-0">
              <Routes />
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}