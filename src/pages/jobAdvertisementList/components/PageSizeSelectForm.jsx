import React from "react";
import { Form } from 'semantic-ui-react';
import PageSizeRadio from './PageSizeRadio';

export default function PageSizeSelectForm({
  currentPageSize,
  handlePageSize,
}) {
  return (
    <Form>
      <Form.Group>
        <PageSizeRadio
          label="10"
          name="pageSize"
          value={10}
          checked={currentPageSize === 10}
          handleChange={(e, { value }) => handlePageSize(e, { value })}
        />
        <PageSizeRadio
          label="20"
          name="pageSize"
          value={20}
          checked={currentPageSize === 20}
          handleChange={(e, { value }) => handlePageSize(e, { value })}
        />
        <PageSizeRadio
          label="50"
          name="pageSize"
          value={50}
          checked={currentPageSize === 50}
          handleChange={(e, { value }) => handlePageSize(e, { value })}
        />
        <PageSizeRadio
          label="100"
          name="pageSize"
          value={100}
          checked={currentPageSize === 100}
          handleChange={(e, { value }) => handlePageSize(e, { value })}
        />
      </Form.Group>
    </Form>
  );
}
