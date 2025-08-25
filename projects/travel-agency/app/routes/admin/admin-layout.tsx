import React from 'react'
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      <aside className='w-100 max-2-[270px] hidden lg:block'>
        Sidebar
      </aside>
      <aside className='children'>
        <Outlet />
      </aside>
    </div>
  )
}

export default AdminLayout;
