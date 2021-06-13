import React from "react";

export default function LanguagesPopup() {
  return (
    <div>
      <Popup trigger={<Label icon="globe" content="Languages" color="blue" />}>
        <Popup.Header>
          <Icon name="globe" color="blue" />
          Languages
        </Popup.Header>
        <Popup.Content>
          <Segment.Inline>
            English
            <Rating disabled defaultRating={3} maxRating={5} />
          </Segment.Inline>
          <Segment.Inline>
            French
            <Rating disabled defaultRating={2} maxRating={5} />
          </Segment.Inline>
        </Popup.Content>
      </Popup>
    </div>
  );
}
