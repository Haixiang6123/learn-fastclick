import React from 'react';
import {Select, Button, Upload, message, Dropdown, Menu} from 'antd';

const { Option } = Select;

function App() {
  const names = ['Jack', 'Dany', 'Jerry']

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <h1>测试选择器</h1>
      <Select defaultValue="Jack">
        {names.map((n) => (
          <Option key={n} value={n}>{n}</Option>
        ))}
      </Select>

      <h1>测试上传</h1>
      <Upload {...props}>
        <Button>上传文件</Button>
      </Upload>

      <h1>测试 Dropdown</h1>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me
        </a>
      </Dropdown>
    </div>
  );
}

export default App;
