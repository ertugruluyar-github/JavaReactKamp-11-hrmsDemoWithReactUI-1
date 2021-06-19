import React from "react";
import { Dropdown, Image, Label, Icon } from "semantic-ui-react";

export default function DropdownProfile({ setIsAuthenticated }) {
  return (
    <div>
      <Dropdown pointing="top right" icon={<Image avatar src="logo192.png" />} >
        <Dropdown.Menu>
          <Dropdown.Header content="Ertuğrul Uyar" />
          <Dropdown.Divider />

          <Dropdown.Item icon="user" text="My Profile" />

          <Dropdown.Item>
            <Icon name="cart" /> Cart
            <Label floating color="orange" circular content="3" />
          </Dropdown.Item>

          <Dropdown.Item>
            <Icon name="mail" /> Messages
            <Label floating color="orange" circular content="22" />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setIsAuthenticated(false)}>
            <Icon name="log out" /> Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
