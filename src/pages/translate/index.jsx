import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Input, message, Tooltip, Space } from 'antd'
import { CopyOutlined, CheckOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styles from './index.module.less'

const { TextArea } = Input

export default function Translate() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')
  const [hasCopy, setHasCopy] = useState(false)
  const [customList, setCustomList] = useState([])
  const [selectIndex, setSelectIndex] = useState(null)

  return (
    <div className={styles.translation}>
      <div className={styles.title}>
        <div>选中/输入文本</div>
        <div />
      </div>
      <div>
        <TextArea
          rows={4}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
      </div>
      <div className={styles.actionTitleWrap}>
        <div className={styles.actionTitle}>提示词</div>
        <div />
      </div>
      <div className={styles.actionWrap}>
        <div className={styles.actionLeft}>
          <Space wrap>
            {customList.map((item, index) => (
              <Button
                size="small"
                value={item.prompt}
                key={item.prompt}
                type="primary"
                ghost={selectIndex !== index}
                onClick={() => {
                  if (!inputValue) {
                    message.warning('请先输入要处理的内容')
                    return
                  }
                  setSelectIndex(index)
                }}
              >
                {item.name}
              </Button>
            ))}
          </Space>
        </div>
        <div className={styles.actionRight}>
          <Button
            icon={<EllipsisOutlined rotate={90} />}
            size="small"
            type="text"
            onClick={() => {
              navigate(`/setting?tab=0`)
            }}
          />
        </div>
      </div>
      <div className={styles.resultTitle}>
        <div>结果</div>
        <div>
          <Tooltip title={hasCopy ? '已复制' : '复制结果'}>
            <CopyToClipboard
              text={outputValue}
              onCopy={() => {
                setHasCopy(true)
                setTimeout(() => {
                  setHasCopy(false)
                }, 3000)
              }}
            >
              <Button
                type="text"
                size="small"
                style={{
                  color: 'gray'
                }}
                icon={hasCopy ? <CheckOutlined /> : <CopyOutlined />}
              />
            </CopyToClipboard>
          </Tooltip>
        </div>
      </div>
      <div>
        <TextArea
          rows={4}
          autoSize={{ minRows: 4 }}
          value={outputValue}
          onChange={(e) => {
            setHasCopy(false)
            setOutputValue(e.target.value)
          }}
        />
      </div>
      <div className={styles.chatWrap}>
        <Button
          // type="text"
          icon={
            <MessageOutlined
              style={{
                color: 'gray'
              }}
            />
          }
          onClick={() => {
            navigate('/chat', {
              state: {
                input: inputValue,
                output: outputValue
              }
            })
          }}
        >
          继续聊聊
        </Button>
      </div>
    </div>
  )
}
