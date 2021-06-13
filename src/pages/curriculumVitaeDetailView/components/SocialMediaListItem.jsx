import React from "react";
import { List } from "semantic-ui-react";

export default function SocialMediaListItem() {
  return (
    <div>
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <a href="mailto:https://github.com/euyar42">
            https://github.com/euyar42
          </a>
        </List.Content>
      </List.Item>
    </div>
  );
}
