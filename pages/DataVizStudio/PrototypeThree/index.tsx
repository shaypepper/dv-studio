import React from "react";
import { SparklineD3, SparklineRaw } from "../../../components/Sparkline";

const PrototypeThree = () => {
  return (
    <>
      <SparklineRaw height={300} width={1000}></SparklineRaw>
      <SparklineD3 height={300} width={1000} padding={50} />
    </>
  );
};

export default PrototypeThree;
