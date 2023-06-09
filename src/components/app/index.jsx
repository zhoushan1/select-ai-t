import React from 'react'
import { ConfigProvider } from 'antd'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Translate from '@/pages/translate'
import Chat from '@/pages/chat'
import Setting from '@/pages/setting'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Translate />
      },
      {
        path: '/chat',
        element: <Chat />
      },
      {
        path: '/setting',
        element: <Setting />
      }
    ]
  }
])

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3d3df5',
          colorPrimaryHover: '#3d3df5',
          wireframe: false
          // borderRadius: 8,
          // borderRadiusSM: 6,
          // borderRadiusXS: 4,
        },
        components: {
          Input: {
            colorBorder: 'transparent'
          },
          InputNumber: {
            colorBorder: 'transparent'
          },
          Select: {
            colorBorder: 'transparent'
          }
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
