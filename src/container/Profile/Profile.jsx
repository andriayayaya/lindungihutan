import React from 'react';
import Navigations from '../../component/navigation';
import Navbar from '../../component/navbar';
import Papersheet from '../../component/paper';
import FullWidthTabs from '../../component/tabs';

function Profile() {
    return(
        <div>
            <Navigations />
            <Navbar />
            <Papersheet />
            <FullWidthTabs />
        </div>
    )
}
export default Profile;