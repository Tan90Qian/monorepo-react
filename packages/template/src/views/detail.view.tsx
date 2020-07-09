import React, { ReactNode } from "react";
import { Descriptions } from "antd";

interface TemplateDetailProps {
  title?: string;
  detail?: {
    [key: string]: ReactNode;
  };
}

export default function TemplateDetail(props: TemplateDetailProps) {
  const { title, detail } = props;
  return (
    <Descriptions title={title}>
      {detail &&
        Object.entries(detail).map(([key, value]) => (
          <Descriptions.Item key={key} label={key}>
            {value}
          </Descriptions.Item>
        ))}
    </Descriptions>
  );
}
