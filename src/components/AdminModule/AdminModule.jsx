
import { Tabs } from 'flowbite-react';
import { HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import DashPosts from './DashPosts';
import DashProfile from './DashProfile';

const AdminModule = () => {
    return (
        <Tabs active aria-label="Default tabs" className='flex justify-center'>
            <Tabs.Item title="Dashboard" icon={MdDashboard}>
                <DashPosts />
            </Tabs.Item>
            <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item title="Profile" icon={HiUserCircle}>
                <DashProfile />
            </Tabs.Item>
        </Tabs>
    );
};

export default AdminModule;



// import React from 'react'
// import { useEffect, useState } from 'react'
// import { useLocation } from "react-router-dom"
// import DashSidebar from './DashSidebar';
// import DashProfile from './DashProfile';
// import DashPosts from './DashPosts';

// const AdminModule = () => {
//     const location = useLocation();
//     const [tab, setTab] = useState('')

//     useEffect(() => {
//         const urlParams = new URLSearchParams(location.search);
//         const tabFromUrl = urlParams.get('tab')
//         if (tabFromUrl) {
//             setTab(tabFromUrl)
//         }
//     }, [location.search])

//     return (
//         <div className='min-h-screen flex flex-col md:flex-row'>
//             <div className='md:w-56'>
//                 <DashSidebar />
//             </div>
//             <div className='max-w-lg mx-auto p-3 w-full'>
//                 {tab === "" && <DashProfile />}
//             </div>
//             {/* <div className='max-w-lg mx-auto p-3 w-full'> */}
//                 {/* {tab === "" && <DashPosts />} */}
//             {/* </div> */}
//         </div>
//     )
// }

// export default AdminModule;

