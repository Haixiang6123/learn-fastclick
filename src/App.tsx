import React from 'react';
import {Select} from "antd";

const { Option } = Select;

function App() {
  const names = ['Jack', 'Dany', 'Jerry']

  return (
    <div>
      <Select defaultValue="Jack">
        {names.map((n) => (
          <Option key={n} value={n}>{n}</Option>
        ))}
      </Select>
    </div>
  );
}

export default App;
