import React from "react";
import { Menu } from 'semantic-ui-react';

export default function Pagination({
  pageCount,
  currentPageNumber,
  setCurrentPageNumber,
}) {
  return (
    <Menu floated="right" pagination>
      <Menu.Item
        icon="chevron left"
        onClick={() =>
          currentPageNumber > 1 && setCurrentPageNumber(currentPageNumber - 1)
        }
      />
      {[...Array(pageCount)].map((page, index) => (
        <Menu.Item key={index} onClick={() => setCurrentPageNumber(index + 1)}>
          {index + 1 === currentPageNumber ? (
            <span style={{ color: "teal" }}>{index + 1}</span>
          ) : (
            <span>{index + 1}</span>
          )}
        </Menu.Item>
      ))}
      <Menu.Item
        icon="chevron right"
        onClick={() =>
          currentPageNumber < pageCount &&
          setCurrentPageNumber(currentPageNumber + 1)
        }
      />
    </Menu>
  );
}
