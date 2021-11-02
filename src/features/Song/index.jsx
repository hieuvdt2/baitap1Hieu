import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: "Phim 1",
      thumbnaillUrl:
        "https://s199.imacdn.com/vg/2021/11/01/a72a0b12119b0207_8a1e86f5209e9db0_3114616357069722118684.jpg",
    },
    {
      id: 2,
      title: "Phim 2",
      thumbnaillUrl:
        "https://s199.imacdn.com/vg/2021/11/01/a72a0b12119b0207_8a1e86f5209e9db0_3114616357069722118684.jpg",
    },
    {
      id: 3,
      title: "Phim 3",
      thumbnaillUrl:
        "https://s199.imacdn.com/vg/2021/11/01/a72a0b12119b0207_8a1e86f5209e9db0_3114616357069722118684.jpg",
    },
  ];
  return (
    <div>
      <h2>Danh sach phim</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
