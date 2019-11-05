import React from 'react';
import Navigations from '../../component/navigation';
import Cardyo from '../../component/body';
import Navbar from '../../component/navbar';
import Cari from '../../component/cariKam';

function Kampanye() {
    return (
        <div>
            <Navbar />
            <Navigations />
            <Cardyo />
            <Cari />
        </div>
    )
}
export default Kampanye;