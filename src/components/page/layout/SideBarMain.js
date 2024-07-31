import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideBarIcons from './sideBarIcons/SideBarIcons';
import SideBarFull from './sideBarFull/SideBarFull';

const SideBarMain = () => {
    const sidebarFull = useSelector(state => state.event.sidebarFull);
    const dispatch = useDispatch();
  return (
    <div className={`transition-all ease-in-out duration-700 transform h-full  ${sidebarFull ? 'w-64' : 'w-12'}`}>
      {sidebarFull ? <SideBarFull /> : <SideBarIcons />}
    </div>
  )
}

export default SideBarMain