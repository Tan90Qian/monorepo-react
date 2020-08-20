import React, { useEffect } from "react";
import { List, Card, Button } from "antd";
import { IModel } from "../interface";
import { RouteComponentProps } from "react-router";
import { useGoDetail, useGoEdit, useGoAdd } from "./hooks";

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

  const goAdd = useGoAdd({
    history,
    path: location.pathname,
  });

  return (
    <Card>
      <Button onClick={goAdd}>新建</Button>
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
    </Card>
  );
}
