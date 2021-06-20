import React from "react";
import { Button, Icon, Input, Select } from "semantic-ui-react";

export default function Search() {
  let searchOptions = [
    {
      key: 0,
      text: "Job Advertisement",
      value: "Job Advertisement",
    },
    {
      key: 1,
      text: "Employer",
      value: "Employer",
    },
    {
      key: 2,
      text: "Curriculm Vitae",
      value: "Curriculm Vitae",
    },
  ];

  return (
    <div>
      <Input type="text" placeholder="Search..." action> 
        <input size={30} />
        <Select options={searchOptions} defaultValue="Job Advertisement" />
        <Button type="submit" animated="fade">
          <Button.Content hidden>Search</Button.Content>
          <Button.Content visible>
            <Icon name="search" />
          </Button.Content>
        </Button>
      </Input>
    </div>
  );
}
