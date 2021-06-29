import React, { useState, useEffect } from "react";
import { Card, Segment } from "semantic-ui-react";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import CurriculumVitaeCard from "./components/CurriculumVitaeCard";

export default function CurriculumVitaeList() {
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaes()
      .then((result) => setCurriculumVitaes(result.data.data));
  }, []);

  return (
    <div>
      <Segment raised padded textAlign="left">
        <Card.Group itemsPerRow={2}>
          {curriculumVitaes.map((curriculumVitae) => (
            <CurriculumVitaeCard
              key={curriculumVitae.id}
              currentCurriculumVitae={curriculumVitae}
            />
          ))}
        </Card.Group>
      </Segment>
    </div>
  );
}
