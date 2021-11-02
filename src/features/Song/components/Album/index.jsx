import React from "react";
import PropTypes from "prop-types";
import "../Album/";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album(props) {
  const { album } = props;
  console.log(album);
  return (
    <div className="album">
      <p className="album-name">{album.title}</p>
      <div className="album-img">
        <img src={album.thumbnaillUrl} alt="" />
      </div>
    </div>
  );
}

export default Album;
