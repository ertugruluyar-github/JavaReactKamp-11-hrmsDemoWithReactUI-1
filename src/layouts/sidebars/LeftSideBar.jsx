import React from "react";
import { Menu, Popup } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function LeftSideBar() {
  return (
    <Menu icon="labeled" inverted color="blue" pointing secondary vertical>
      <Popup
        key={0}
        content="Home"
        position="right center"
        trigger={<Menu.Item key={0} as={NavLink} to="/home" icon="home" />}
      />
      <Popup
        key={1}
        content="Employers"
        position="right center"
        trigger={
          <Menu.Item key={1} as={NavLink} to="/employers" icon="building" />
        }
      />
      <Popup
        key={2}
        content="Job Seekers"
        position="right center"
        trigger={
          <Menu.Item key={2} as={NavLink} to="/jobseekers" icon="handshake" />
        }
      />
      <Popup
        key={3}
        content="Active Job Advertisements"
        position="right center"
        trigger={
          <Menu.Item
            key={3}
            as={NavLink}
            to="/activejobadvertisements"
            icon="bullhorn"
          />
        }
      />
      <Popup
        key={4}
        content="Job Advertisement Add Form"
        position="right center"
        trigger={
          <Menu.Item
            key={4}
            as={NavLink}
            to="/jobadvertisementaddform"
            icon="tags"
          />
        }
      />

      <Popup
        key={6}
        content="Curriculum Vitae List"
        position="right center"
        trigger={
          <Menu.Item
            key={6}
            as={NavLink}
            to="/curriculumvitaelist"
            icon="box"
          />
        }
      />

      <Popup
        key={7}
        content="System Employee Update Form"
        position="right center"
        trigger={
          <Menu.Item
            key={7}
            as={NavLink}
            to="/systememployees/8/update"
            icon="id badge"
          />
        }
      />
    </Menu>
  );
}
