import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Spinner = ({ fontSize }: { fontSize: number }) => {
  const antIcon = <LoadingOutlined style={{ fontSize }} spin />;
  return <Spin indicator={antIcon} />;
};

export default Spinner;
