import React from "react";
import { Dropdown, Image, Label, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DropdownProfile({ setIsAuthenticated }) {
  const { myJobAdvertisementsItems } = useSelector(
    (state) => state.myJobAdvertisements
  );

  return (
    <div>
      <Dropdown pointing="top right" icon={<Image avatar src="logo192.png" />}>
        <Dropdown.Menu>
          <Dropdown.Header content="Ertuğrul Uyar" />
          <Dropdown.Divider />

          <Dropdown.Item icon="user" text="My Profile" />

          <Dropdown.Item as={NavLink} to="/activejobadvertisements">
            <Icon name="bullhorn" /> My Job Advertisements
            {myJobAdvertisementsItems.length > 0 && (
              <Label
                floating
                color="orange"
                circular
                content={myJobAdvertisementsItems.length}
              />
            )}
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
