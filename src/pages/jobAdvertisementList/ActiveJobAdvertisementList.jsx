import React, { useState, useEffect } from "react";
import {
  Header,
  Icon,
  Menu,
  Segment,
  Table,
  Label,
  Rating,
} from "semantic-ui-react";
import JobAdvertisementService from "./../../services/jobAdvertisementService";
import JobSeekerService from "./../../services/jobSeekerService";

export default function ActiveJobAdvertisementList() {
  const [activeJobAdvertisements, setActiveJobAdvertisements] = useState([]);
  const [
    currentFavouriteJobAdvertisements,
    setCurrentFavouriteJobAdvertisements,
  ] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    let jobSeekerService = new JobSeekerService();

    jobAdvertisementService
      .getActivatedJobAdvertisements()
      .then((result) => setActiveJobAdvertisements(result.data.data));

    jobSeekerService
      .getJobSeeker(5)
      .then((result) =>
        setCurrentFavouriteJobAdvertisements(
          result.data.data.favouriteJobAdvertisements
        )
      );
  }, []);

  let handleLike = (jobAdvertisementId) => {
    let jobSeekerService = new JobSeekerService();
    if (
      currentFavouriteJobAdvertisements.find((j) => j.id === jobAdvertisementId, null
      ) == null
    ) {
      jobSeekerService.likeJobAdvertisement(jobAdvertisementId, 5);
      console.log("1: " + jobAdvertisementId + " - " + 5);
    } else {
      jobSeekerService.dislikeJobAdvertisement(jobAdvertisementId, 5);
      console.log("2: " + jobAdvertisementId + " - " + 5);
    }
  };

  return (
    <div>
      <Segment raised padded>
        <Header
          dividing
          color="blue"
          textAlign="right"
          icon="bullhorn"
          content="Job Advertisement List"
        />
        <Table verticalAlign="middle" padded celled selectable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Employee Position</Table.HeaderCell>
              <Table.HeaderCell>Number Of Position</Table.HeaderCell>
              <Table.HeaderCell>Release Date</Table.HeaderCell>
              <Table.HeaderCell>Application Deadline</Table.HeaderCell>
              <Table.HeaderCell>Working Place Type</Table.HeaderCell>
              <Table.HeaderCell>Working Time Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {activeJobAdvertisements.map((activeJobAdvertisement) => (
              <Table.Row
                verticalAlign="middle"
                textAlign="center"
                key={activeJobAdvertisement.id}
              >
                <Table.Cell collapsing>
                  {activeJobAdvertisement.employer.companyName}
                </Table.Cell>
                <Table.Cell collapsing>
                  {activeJobAdvertisement.employeePosition.positionName}
                </Table.Cell>
                <Table.Cell collapsing>
                  {activeJobAdvertisement.numberOfPosition}
                </Table.Cell>
                <Table.Cell collapsing>
                  {activeJobAdvertisement.releaseDate}
                </Table.Cell>
                <Table.Cell collapsing>
                  {activeJobAdvertisement.applicationDeadline}
                </Table.Cell>
                <Table.Cell collapsing>
                  {activeJobAdvertisement.workingPlaceType.type}
                </Table.Cell>
                <Table.Cell collapsing>
                  <Segment basic>
                    {activeJobAdvertisement.workingTimeType.type}
                    <Label
                      as="a"
                      floating
                      circular
                      onClick={() => handleLike(activeJobAdvertisement.id)}
                    >
                      <Rating
                        icon="heart"
                        defaultRating={
                          currentFavouriteJobAdvertisements.find(
                            (j) => j.id === activeJobAdvertisement.id,
                            null
                          ) == null
                            ? 0
                            : 1
                        }
                        maxRating={1}
                      />
                    </Label>
                  </Segment>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="8">
                <Segment floated="left">
                  <Icon name="info circle" color="grey" size="large" />
                  <span>
                    {activeJobAdvertisements.length} Job advertisements listed.
                  </span>
                </Segment>
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    </div>
  );
}
