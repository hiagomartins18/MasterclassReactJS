import './Sidebar.css';
import { House, Hash, Bell, BookmarkSimple, FileText, User, DotsThreeCircle, Envelope } from 'phosphor-react'
import twitterLogo from '../../assets/logo-twitter.svg';
import { NavLink } from 'react-router-dom';

export function Sidebar(){
  return(
    <aside className='sidebar'>
    <img src={twitterLogo} alt="Logo" className='logo'/>
    <nav className='main__navigation'>
      <NavLink to="/" className='active'>
        <House weight='fill'/>
        Home
      </NavLink>
      <a href="">
        <Hash />
        Explore
      </a>
      <a href="">
        <Bell/>
        Notifications
      </a>
      <a href="">
        <Envelope/>
        Messages
      </a>
      <a href="">
        <BookmarkSimple/>
        Bookmarks
      </a>
      <a href="">
        <FileText/>
        Lists
      </a>
      <a href="">
        <User/>
        Profile
      </a>
      <a href="">
        <DotsThreeCircle/>
        More
      </a>
    </nav>
    <button className='new-tweet' type='button'>Tweet</button>
  </aside>
  )
};