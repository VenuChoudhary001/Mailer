import React from "react";
import { Typography, Avatar } from "@material-ui/core";
function ViewMail() {
  return (
    <div className="view-mail">
      <div className="mail-title">
        <Typography variant="h6">
          TOI Top Stories shared "Centre announces tax concessions for
          payment...
        </Typography>
      </div>
      <div className="mail-info ">
        <Avatar src="/hi" alt="TOI" />
        <Typography variant="subtitle1" className="mx-4">
          Twitter
          <Typography variant="subtitle2">07:46</Typography>
        </Typography>
      </div>
      <hr />
      <div className="mail-content">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          recusandae animi sequi qui illum autem quam adipisci itaque enim. Qui,
          laudantium! Harum perspiciatis similique, id nesciunt deserunt
          asperiores ipsum voluptates! Facilis, fugiat unde voluptates modi
          obcaecati, quasi nulla laborum consequatur dolor cum quas? Sequi
          quibusdam in odio sint, illo id.
        </Typography>
      </div>
    </div>
  );
}

export default ViewMail;
