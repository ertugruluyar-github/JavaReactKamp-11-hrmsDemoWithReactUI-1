import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import curriculumVitaeOnSubmitUpdate from "./components/curriculumVitaeOnSubmitUpdate";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";
import { useHistory } from "react-router-dom";
import SchoolService from "./../../services/schoolService";
import LanguageService from "./../../services/languageService";
import WorkExperienceService from "./../../services/workExperienceService";
import TechnologyKnowledgeService from "./../../services/technologyKnowledgeService";

export default function CurriculumVitaeUpdateForm({ currentCurriculumVitae }) {
  const [currentSchools, setCurrentSchools] = useState([]);
  const [currentLanguages, setCurrentLanguages] = useState([]);
  const [currentWorkExperiences, setCurrentWorkExperiences] = useState([]);
  const [currentTechnologyKnowledges, setCurrentTechnologyKnowledges] =
    useState([]);

  let history = useHistory();

  useEffect(() => {
    let schoolService = new SchoolService();
    let languageService = new LanguageService();
    let workExperienceService = new WorkExperienceService();
    let technologyKnowledgeService = new TechnologyKnowledgeService();

    schoolService
      .getSchools()
      .then((result) =>
        setCurrentSchools(
          result.data.data.filter(
            (school) => school.curriculumVitae.id === currentCurriculumVitae.id
          )
        )
      );

    languageService
      .getLanguages()
      .then((result) =>
        setCurrentLanguages(
          result.data.data.filter(
            (language) =>
              language.curriculumVitae.id === currentCurriculumVitae.id
          )
        )
      );

    workExperienceService
      .getWorkExperiences()
      .then((result) =>
        setCurrentWorkExperiences(
          result.data.data.filter(
            (workExperience) =>
              workExperience.curriculumVitae.id === currentCurriculumVitae.id
          )
        )
      );

    technologyKnowledgeService
      .getTechnologyKnowledges()
      .then((result) =>
        setCurrentTechnologyKnowledges(
          result.data.data.filter(
            (technologyKnowledge) =>
              technologyKnowledge.curriculumVitae.id ===
              currentCurriculumVitae.id
          )
        )
      );
  }, [currentCurriculumVitae.id]);

  let currentInitialValues = {
    description: currentCurriculumVitae.description,
    githubLink: currentCurriculumVitae.githubLink,
    linkedinLink: currentCurriculumVitae.linkedinLink,
    photoLink: currentCurriculumVitae.photoLink,
    jobSeeker: currentCurriculumVitae.jobSeeker,
    schools: currentSchools,
    languages: currentLanguages,
    workExperiences: currentWorkExperiences,
    technologyKnowledges: currentTechnologyKnowledges,
  };

  const formik = useFormik({
    initialValues: currentInitialValues,
    validationSchema: curriculumVitaeValidationSchema,
    onSubmit: (values) => {
      curriculumVitaeOnSubmitUpdate(values, history, currentCurriculumVitae.id);
    },
  });

  console.log(formik.values);

  return (
    <CurriculumVitaeForm
      headerIconName="paperclip"
      headerContent="Update Curriculum Vitae"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={formik}
    />
  );
}
