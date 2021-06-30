import React, { useState, useEffect } from "react";
import {
  Header,
  Segment,
  Table,
  Label,
  Rating,
  Sidebar,
} from "semantic-ui-react";
import JobAdvertisementService from "./../../services/jobAdvertisementService";
import JobSeekerService from "./../../services/jobSeekerService";
import JobAdvertisementFilter from "./components/JobAdvertisementFilter";
import PageSizeSelectForm from "./components/PageSizeSelectForm";
import Pagination from "./../../utilities/Pagination";
import JobAdvertisementsCountInfo from "./components/JobAdvertisementsCountInfo";

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
  const [filterValues, setFilterValues] = useState({
    workingPlaceTypeId: -1,
    workingTimeTypeId: -1,
  });

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    if (
      filterValues.workingPlaceTypeId === -1 &&
      filterValues.workingTimeTypeId === -1
    ) {
      jobAdvertisementService
        .getAllActivatedWithPageable(currentPageNumber, currentPageSize)
        .then((result) =>
          setActiveJobAdvertisementsInCurrentPage(result.data.data)
        );
    } else {
      jobAdvertisementService
        .getAllActivatedByWorkingPlaceTypeAndWorkingTimeTypeWithPageable(
          currentPageNumber,
          currentPageSize,
          filterValues.workingPlaceTypeId,
          filterValues.workingTimeTypeId
        )
        .then((result) =>
          setActiveJobAdvertisementsInCurrentPage(result.data.data)
        );
    }
  }, [currentPageNumber, currentPageSize, filterValues]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAllActivated().then((result) => {
      handlePageCount(result.data.data.length, currentPageSize);
      setAllActivatedJobAdvertisementsCount(result.data.data.length);
    });
  }, [currentPageSize, filterValues]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .get(5)
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

  let handleFilterVisible = () => {
    isVisibleFilter ? setIsVisibleFilter(false) : setIsVisibleFilter(true);
  };

  let handleFilter = (filterValue) => {
    console.log({ ...filterValues, ...filterValue });
    setFilterValues({ ...filterValues, ...filterValue });
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
          <JobAdvertisementFilter
            handleFilterVisible={handleFilterVisible}
            handleFilter={handleFilter}
          />
        </Sidebar>
        <Sidebar.Pusher>
          <Label
            color="blue"
            corner="right"
            icon="filter"
            onClick={handleFilterVisible}
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
                  <JobAdvertisementsCountInfo
                    currentDataCount={
                      activeJobAdvertisementsInCurrentPage.length
                    }
                    allDataCount={allActivatedJobAdvertisementsCount}
                  />
                  <Pagination
                    pageCount={pageCount}
                    currentPageNumber={currentPageNumber}
                    setCurrentPageNumber={setCurrentPageNumber}
                  />
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell colSpan="8">
                  <PageSizeSelectForm
                    currentPageSize={currentPageSize}
                    handlePageSize={handlePageSize}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Segment>
  );
}
