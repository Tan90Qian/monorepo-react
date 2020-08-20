import React, { useEffect } from "react";
import { List } from "antd";
import { IModel } from "../interface";
import { RouteComponentProps } from "react-router";
import { useGoDetail, useGoEdit } from "./hooks";

interface TemplateListProps extends RouteComponentProps {
  dataSource?: IModel[];
  didMount: Function;
}

export default function TemplateList(props: TemplateListProps) {
  const { dataSource, didMount, location, history } = props;

  useEffect(() => {
    didMount();
  }, []);

  const goEdit = useGoEdit({
    history,
    path: location.pathname,
  });

  const goDetail = useGoDetail({
    history,
    path: location.pathname,
  });

  return (
    <List
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item
          actions={[
            <span onClick={() => goDetail(item.id)}>查看</span>,
            <span onClick={() => goEdit(item.id)}>编辑</span>,
          ]}
        >
          {item.title}
        </List.Item>
      )}
    />
  );
}
