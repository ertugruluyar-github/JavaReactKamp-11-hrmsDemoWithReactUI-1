import React from "react";
import { Button, Icon } from "semantic-ui-react";
import LanguageUpdateForm from '../../forms/language/LanguageUpdateForm';
import CustomModal from '../../../../../../utilities/CustomModal';

export default function LanguageEditModal({ currentLanguage }) {
  return (
    <CustomModal
      trigger={
        <Button color="orange" animated="fade" circular>
          <Button.Content visible>
            <Icon name="edit" />
          </Button.Content>
          <Button.Content hidden>Edit</Button.Content>
        </Button>
      }
      content={<LanguageUpdateForm currentLanguage={currentLanguage} />}
      actions={<p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>}
    />
  );
}
