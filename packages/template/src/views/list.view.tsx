import React, { useEffect } from "react";
import { List } from "antd";
import { IModel } from "../interface";

interface TemplateListProps {
  dataSource?: IModel[];
  didMount: Function;
}

export default function TemplateList(props: TemplateListProps) {
  const { dataSource, didMount } = props;

  useEffect(() => {
    didMount();
  }, []);

  return (
    <List
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item actions={[<span>查看</span>, <span>编辑</span>]}>
          {item.name}
        </List.Item>
      )}
    />
  );
}
