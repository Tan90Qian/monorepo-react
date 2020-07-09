import React, { useEffect } from "react";
import { Descriptions } from "antd";
import { IModel } from "../interface";

interface TemplateDetailProps {
  title?: string;
  data?: IModel;
  didMount: Function;
}

export default function TemplateDetail(props: TemplateDetailProps) {
  const { title, data, didMount } = props;

  useEffect(() => {
    didMount();
  }, []);
  return (
    <Descriptions title={title}>
      {data &&
        Object.entries(data).map(([key, value]) => (
          <Descriptions.Item key={key} label={key}>
            {value}
          </Descriptions.Item>
        ))}
    </Descriptions>
  );
}
