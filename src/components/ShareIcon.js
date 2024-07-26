import React from "react";
import { GridColumn, Header, Button, Popup, Grid } from "semantic-ui-react";
import { FaShareAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
const ShareIcon = ({ id }) => {
  const message = `https://recipe-share-frontend.vercel.app/recipes/${id}`;
  const shareOnWhatsApp = () => {
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <Popup
      trigger={
        <Button className="social-media-btn">
          <FaShareAlt className="icon" />
        </Button>
      }
      flowing
      position="top center"
      on="click"
      className="icon-box"
    >
      <Grid centered divided columns={5} className="icon-grid">
        <GridColumn textAlign="center">
          <Button className="social-media-btn">
            <IoIosCopy />
          </Button>
        </GridColumn>
        <GridColumn textAlign="center">
          <Button
            className="social-media-btn"
            onClick={shareOnWhatsApp}
            data-action="share/whatsapp/share"
          >
            <ImWhatsapp />
          </Button>
        </GridColumn>
        <GridColumn textAlign="center">
          <Button className="social-media-btn">
            <RiTwitterXFill />
          </Button>
        </GridColumn>
        <GridColumn textAlign="center">
          <Button className="social-media-btn">
            <FaFacebookF />
          </Button>
        </GridColumn>
        <GridColumn textAlign="center">
          <Button className="social-media-btn">
            <FaInstagram />
          </Button>
        </GridColumn>
      </Grid>
    </Popup>
  );
};

export default ShareIcon;
