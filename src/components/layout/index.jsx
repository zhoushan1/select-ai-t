import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div style={{ padding: '12px' }}>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
