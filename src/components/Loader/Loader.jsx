import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styles";

const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="#3470FF"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
