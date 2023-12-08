import React from "react";
import briefcaseImg from "../Images/briefcase.svg";
import arrowDown from "../Images/arrowdown.svg";
import home from "../Images/home.svg";
import SidebarJunks from "./sidebarJunks";
import users from "../Images/user-friends.svg";
import guarantor from "../Images/users.svg";
import money from "../Images/sack.svg";
import handshakes from '../Images/handshake-regular.svg';
import savings from '../Images/piggy-bank.svg'
import request from '../Images/request.svg';
import whitelist from '../Images/whitelist.svg'
import karma from '../Images/karma.svg';
import bank from '../Images/bank.svg';
import charges from '../Images/charges.svg'
import transactions from '../Images/transaction.svg';
import galaxy from '../Images/galaxy.svg'
import account from '../Images/account.svg';
import scroll from '../Images/scroll.svg';
import chart from '../Images/chart.svg';
import sliders from '../Images/sliders.svg'
import fees from '../Images/badge-percent.svg';
import clipboard from '../Images/clipboard-list.svg';
const DashboardSidebar = () => {
  return (
    <div className="dashboardSidebar">
      <div className="headerSidebar">
        <img src={briefcaseImg} alt="Briefcase-img" />
        <p className="switch">Switch Organization</p>
        <img src={arrowDown} alt="down-down" />
      </div>
      <SidebarJunks src={home} alt="home-icon" title="Dashboard" />
      <div className="customers">
        <p className="customer">CUSTOMERS</p>
      </div>
      <div className="mainUser">
      <SidebarJunks src={users} alt="multiple users" title="Users" />
      </div>

      <SidebarJunks src={guarantor} alt="Guarantor" title="Guarantor" />

      <SidebarJunks src={money} alt="Money" title="Loans" />

      <SidebarJunks src={handshakes} alt='handshakes' title='Decision Models' />

      <SidebarJunks src={savings} alt='Savings' title="Savings" />

      <SidebarJunks src={request} alt='loan request' title='Loan Requests' />

      <SidebarJunks src={whitelist} alt='whitelist' title='Whitelist' />

      <SidebarJunks src={karma} alt='karma' title='Karma' />

      <div className="business">
        <p>BUSINESSES</p>
      </div>

      <SidebarJunks src={briefcaseImg} alt='briefcaseImg' title='Organization' />

      <SidebarJunks src={request} alt='product' title='Loan Products' />

      <SidebarJunks src={bank} alt='bank' title='Saving Products' />

      <SidebarJunks src={charges} alt='charges' title='Fees amd Charges' />

      <SidebarJunks src={transactions} alt='transation' title='Transactions' />

      <SidebarJunks src={galaxy} alt='galaxy' title='Services' />

      <SidebarJunks src={account} alt='account' title='Service Accounts' />

      <SidebarJunks src={scroll} alt='Scroll' title="Settlements" />

      <SidebarJunks src={chart} alt='chart' title="Reports" />

      <div className="business">
        <p>SETTINGS</p>
      </div>

      <SidebarJunks src={sliders} alt='sliders' title='Preferences' />

      <SidebarJunks src={fees} alt='badges' title="Fees and Pricing" />

      <SidebarJunks src={clipboard} alt='clipboard' title='Audit Logs' />
    </div>
  );
};

export default DashboardSidebar;
