import React, { useEffect } from "react";
import { Descriptions } from "antd";
import { IModel } from "../interface";
import { RouteComponentProps } from "react-router";

interface TemplateDetailProps extends RouteComponentProps<{ id: string }> {
  title?: string;
  dataSource?: IModel;
  didMount: Function;
}

export default function TemplateDetail(props: TemplateDetailProps) {
  const { title, dataSource, didMount } = props;

  useEffect(() => {
    const { match } = props;
    didMount(match.params.id);
  }, []);
  return (
    <Descriptions title={title}>
      {dataSource &&
        Object.entries(dataSource).map(([key, value]) => (
          <Descriptions.Item key={key} label={key}>
            {value}
          </Descriptions.Item>
        ))}
    </Descriptions>
  );
}
