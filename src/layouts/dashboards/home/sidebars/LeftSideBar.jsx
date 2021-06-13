import React from "react";
import { Menu, Popup } from "semantic-ui-react";

export default function LeftSideBar() {
  return (
    <div>
      <Menu icon="labeled" inverted color="blue" pointing secondary vertical>
        <Popup
          content="Home"
          position="right center"
          trigger={<Menu.Item a="a" icon="home" active />}
        />
        <Popup
          content="Employers"
          position="right center"
          trigger={<Menu.Item a="a" icon="building"  />}
        />
        <Popup
          content="Job Seekers"
          position="right center"
          trigger={<Menu.Item a="a" icon="handshake" />}
        />
        <Popup
          content="Active Job Advertisements"
          position="right center"
          trigger={<Menu.Item a="a" icon="bullhorn" />}
        />
        <Popup
          content="Employee Positions"
          position="right center"
          trigger={<Menu.Item a="a" icon="tags" />}
        />
        <Popup
          content="Cities"
          position="right center"
          trigger={<Menu.Item a="a" icon="map marker alternate" />}
        />
        <Popup
          content="Curriculum Vitae List"
          position="right center"
          trigger={<Menu.Item a="a" icon="box" />}
        />
        <Popup
          content="Curriculum Vitae Detail View"
          position="right center"
          trigger={<Menu.Item a="a" icon="sticky note" />}
        />
      </Menu>
    </div>
  );
}
