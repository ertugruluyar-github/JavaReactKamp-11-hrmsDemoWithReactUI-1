import React from "react";
import CustomModal from "../../../../../utilities/CustomModal";
import PhotoUploadForm from "../forms/PhotoUploadForm";
import { Button, Icon } from "semantic-ui-react";

export default function PhotoUploadModal({ formik }) {
  return (
    <CustomModal
      trigger={
        <Button color="orange" animated="fade" circular>
          <Button.Content visible>
            <Icon name="camera" />
          </Button.Content>
          <Button.Content hidden>Upload Photo</Button.Content>
        </Button>
      }
      content={
        <PhotoUploadForm formik={formik} />
      }
      actions={<p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>}
    />
  );
}
