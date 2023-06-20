import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox, ConfigProvider, Radio, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/store/counterSlice'

export default function Setting() {
  const navigate = useNavigate()
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

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
      <div>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          加1
        </Button>
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          减1
        </Button>
        <div>当前数值:{count}</div>
      </div>
    </div>
  )
}
