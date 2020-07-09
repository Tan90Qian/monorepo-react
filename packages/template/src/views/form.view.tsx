import React from "react";
import { Form, Input, Button } from "antd";

interface TemplateFormProps {
  fields?: any;
  onFinish?: any;
  onChange?: any;
}

export default function TemplateForm(props: TemplateFormProps) {
  const { fields, onFinish, onChange } = props;

  return (
    <Form fields={fields} onFinish={onFinish} onFieldsChange={onChange}>
      <Form.Item name="name" label="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}
