import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox, ConfigProvider, Radio, Button } from 'antd'

export default function Setting() {
  const navigate = useNavigate()
  return (
    <div>
      这是设置页面
      <Button
        onClick={() => {
          navigate(-1)
        }}
      >
        返回
      </Button>
    </div>
  )
}
