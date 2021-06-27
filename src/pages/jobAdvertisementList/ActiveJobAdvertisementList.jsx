import React, { useState, useEffect } from "react";
import {
  Header,
  Icon,
  Menu,
  Segment,
  Table,
  Label,
  Rating,
  Sidebar,
  Form,
} from "semantic-ui-react";
import JobAdvertisementService from "./../../services/jobAdvertisementService";
import JobSeekerService from "./../../services/jobSeekerService";
import JobAdvertisementFilter from "./components/JobAdvertisementFilter";
import PageSizeRadio from "./components/PageSizeRadio";

export default function ActiveJobAdvertisementList() {
  const [
    activeJobAdvertisementsInCurrentPage,
    setActiveJobAdvertisementsInCurrentPage,
  ] = useState([]);
  const [
    currentFavouriteJobAdvertisements,
    setCurrentFavouriteJobAdvertisements,
  ] = useState([]);
  const [
    allActivatedJobAdvertisementsCount,
    setAllActivatedJobAdvertisementsCount,
  ] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  //const [filterValues, setFilterValues] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllByActivatedWithPageable(currentPageNumber, currentPageSize)
      .then((result) =>
        setActiveJobAdvertisementsInCurrentPage(result.data.data)
      );
  }, [currentPageNumber, currentPageSize]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getActivatedJobAdvertisements().then((result) => {
      handlePageCount(result.data.data.length, currentPageSize);
      setAllActivatedJobAdvertisementsCount(result.data.data.length);
    });
  }, [currentPageSize]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeeker(5)
      .then((result) =>
        setCurrentFavouriteJobAdvertisements(
          result.data.data.favouriteJobAdvertisements
        )
      );
  }, [currentFavouriteJobAdvertisements]);

  let handlePageCount = (allDataCount, currentPageSize) => {
    if (allDataCount <= currentPageSize) {
      setPageCount(1);
    } else {
      setPageCount(
        allDataCount % currentPageSize === 0
          ? allDataCount / currentPageSize
          : allDataCount / currentPageSize -
              (allDataCount % currentPageSize) * 0.1 +
              1
      );
    }
  };

  let handleLike = (jobAdvertisementId) => {
    let jobSeekerService = new JobSeekerService();
    if (
      currentFavouriteJobAdvertisements.find(
        (j) => j.id === jobAdvertisementId,
        null
      ) == null
    ) {
      jobSeekerService.likeJobAdvertisement(jobAdvertisementId, 5);
      console.log("Liked: " + jobAdvertisementId + " - " + 5);
    } else {
      jobSeekerService.dislikeJobAdvertisement(jobAdvertisementId, 5);
      console.log("Disliked: " + jobAdvertisementId + " - " + 5);
    }
  };

  let handlePageSize = (e, { value }) => {
    setCurrentPageSize(value);
  };

  return (
    <Segment raised padded>
      <Sidebar.Pushable>
        <Sidebar
          as={Segment}
          animation="scale down"
          direction="top"
          inverted
          color="blue"
          visible={isVisibleFilter}
          width="thin"
          padded
          placeholder
          compact
        >
          <Header content="Filter" textAlign="left" as="h2" />
          <Label
            corner="right"
            onClick={() =>
              isVisibleFilter
                ? setIsVisibleFilter(false)
                : setIsVisibleFilter(true)
            }
          >
            <Icon name="filter" color="blue" />
          </Label>
          <JobAdvertisementFilter />
        </Sidebar>
        <Sidebar.Pusher>
          <Label
            color="blue"
            corner="right"
            icon="filter"
            onClick={() =>
              isVisibleFilter
                ? setIsVisibleFilter(false)
                : setIsVisibleFilter(true)
            }
          />
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
              {activeJobAdvertisementsInCurrentPage.map(
                (activeJobAdvertisement) => (
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
                )
              )}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="8">
                  <Segment floated="left">
                    <Icon name="info circle" color="grey" size="large" />
                    <span>
                      {activeJobAdvertisementsInCurrentPage.length} Job
                      advertisements listed (in{" "}
                      {allActivatedJobAdvertisementsCount}
                      ).
                    </span>
                  </Segment>
                  <Menu floated="right" pagination>
                    <Menu.Item
                      icon="chevron left"
                      onClick={() =>
                        currentPageNumber > 1 &&
                        setCurrentPageNumber(currentPageNumber - 1)
                      }
                    />
                    {[...Array(pageCount)].map((page, index) => (
                      <Menu.Item
                        key={index}
                        onClick={() => setCurrentPageNumber(index + 1)}
                      >
                        {index + 1}
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
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell colSpan="8">
                  <Form>
                    <Form.Group>
                      <PageSizeRadio
                        label="10"
                        name="pageSize"
                        value={10}
                        checked={currentPageSize === 10}
                        handleChange={(e, { value }) =>
                          handlePageSize(e, { value })
                        }
                      />
                      <PageSizeRadio
                        label="20"
                        name="pageSize"
                        value={20}
                        checked={currentPageSize === 20}
                        handleChange={(e, { value }) =>
                          handlePageSize(e, { value })
                        }
                      />
                      <PageSizeRadio
                        label="50"
                        name="pageSize"
                        value={50}
                        checked={currentPageSize === 50}
                        handleChange={(e, { value }) =>
                          handlePageSize(e, { value })
                        }
                      />
                      <PageSizeRadio
                        label="100"
                        name="pageSize"
                        value={100}
                        checked={currentPageSize === 100}
                        handleChange={(e, { value }) =>
                          handlePageSize(e, { value })
                        }
                      />
                    </Form.Group>
                  </Form>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Segment>
  );
}
