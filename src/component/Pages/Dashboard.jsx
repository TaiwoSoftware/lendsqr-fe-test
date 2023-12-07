import React from 'react';
import Logo from '../Images/Logo.svg';
import searchIcon from '../Images/searchicon.svg';
import notifier from '../Images/notifier.svg';
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <nav>
                <img src={Logo} alt='Logo' />
                <input type='search' placeholder='search for anything' />
                <button>
                    <img src={searchIcon} alt='Search icon' />
                </button>
                <div>
                    <p>Docs</p>
                    <img src={notifier} alt='notifier' />
                </div>
            </nav>
        </div>
    );
}

export default Dashboard;