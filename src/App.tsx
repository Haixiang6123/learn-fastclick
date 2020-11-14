import React from 'react';
import {Select, Button} from "antd";

const { Option } = Select;

function App() {
  const names = ['Jack', 'Dany', 'Jerry']

  const antdClick = () => alert('Antd按钮');
  const normalClick = () => alert('普通按钮');

  return (
    <div>
      <h1>测试选择器</h1>
      <Select defaultValue="Jack">
        {names.map((n) => (
          <Option key={n} value={n}>{n}</Option>
        ))}
      </Select>

      <h1>测试普通选择器</h1>
      <select>
        {names.map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      <h1>测试Antd按钮</h1>
      <Button onClick={antdClick}>Hello</Button>

      <h1>测试普通按钮</h1>
      <button onClick={normalClick}>Hello</button>
    </div>
  );
}

export default App;
