import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { RouteComponentProps } from "react-router";

interface TemplateFormProps extends RouteComponentProps<{ id?: string }> {
  fields?: any;
  onFinish?: any;
  onChange?: any;
  didMount: Function;
}

export default function TemplateForm(props: TemplateFormProps) {
  const { fields, onFinish, onChange, didMount } = props;

  useEffect(() => {
    const { match } = props;
    didMount(match.params.id);
  }, []);

  return (
    <Form fields={fields} onFinish={onFinish} onFieldsChange={onChange}>
      <Form.Item name="title" label="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="description">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}
