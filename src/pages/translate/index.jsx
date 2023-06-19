
import { useNavigate } from "react-router-dom";
import { Checkbox, ConfigProvider, Radio,Button } from 'antd';

export default function Translate() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/setting");
  }

  return <div>翻译组件<Button onClick={handleClick}>跳到设置页</Button></div>
}