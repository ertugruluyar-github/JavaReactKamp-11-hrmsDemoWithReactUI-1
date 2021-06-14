import React from "react";
import { List } from "semantic-ui-react";

export default function SocialMediaList({currentCurriculumVitae}) {
  return (
    <div>
      <List animated verticalAlign="middle">
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <a href={currentCurriculumVitae.githubLink}>
              {currentCurriculumVitae.githubLink}
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkedin" size="large" verticalAlign="middle" />
          <List.Content>
            <a href={currentCurriculumVitae.linkedinLink}>
              {currentCurriculumVitae.linkedinLink}
            </a>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}
