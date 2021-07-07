import React from "react";
import { Menu, Popup } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function LeftSideBar() {
  return (
    <Menu icon="labeled" inverted color="blue" pointing secondary vertical>
      <Popup
        content="Home"
        position="right center"
        trigger={<Menu.Item as={NavLink} to="/home" icon="home" />}
      />

      <Popup
        content="Employers"
        position="right center"
        trigger={<Menu.Item as={NavLink} to="/employers" icon="building" />}
      />

      <Popup
        content="Employer Update Form"
        position="right center"
        trigger={
          <Menu.Item as={NavLink} to="/employers/22/update" icon="building" />
        }
      />

      <Popup
        content="Job Seekers"
        position="right center"
        trigger={<Menu.Item as={NavLink} to="/jobseekers" icon="handshake" />}
      />

      <Popup
        content="Active Job Advertisements"
        position="right center"
        trigger={
          <Menu.Item
            as={NavLink}
            to="/activejobadvertisements"
            icon="bullhorn"
          />
        }
      />

      <Popup
        content="Curriculum Vitae List"
        position="right center"
        trigger={<Menu.Item as={NavLink} to="/curriculumvitaes" icon="box" />}
      />

      <Popup
        content="Job Advertisement Add Form"
        position="right center"
        trigger={
          <Menu.Item as={NavLink} to="/16/jobadvertisementaddform" icon="tags" />
        }
      />

      <Popup
        content="System Employee Update Form"
        position="right center"
        trigger={
          <Menu.Item
            as={NavLink}
            to="/systememployees/8/update"
            icon="id badge"
          />
        }
      />
    </Menu>
  );
}
