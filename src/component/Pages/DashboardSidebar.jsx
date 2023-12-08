import React from 'react';
import briefcaseImg from '../Images/briefcase.svg';
import arrowDown from '../Images/arrowdown.svg';
import home from '../Images/home.svg';
import SidebarJunks from './sidebarJunks';
const DashboardSidebar = () => {
    return (
        <div className='dashboardSidebar'>
            <div className='headerSidebar'>
                <img src={briefcaseImg} alt="Briefcase-img" />
                <p className='switch'>Switch Organization</p>
                <img src={arrowDown} alt='down-down' />
            </div>
            <SidebarJunks 
                src={home}
                alt='home-icon'
                title='Dashboard'
            />
            <h3>CUSTOMERS</h3>

        </div>
    );
}

export default DashboardSidebar;
