import React from "react";
import { useRecoilBridgeAcrossReactRoots_UNSTABLE } from "recoil";
import { Canvas } from "react-three-fiber";

const RecoilCanvas = ({ children, ...props}) => {
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <Canvas {...props}>
      <RecoilBridge>
        {children}
      </RecoilBridge>
    </Canvas>
  );
}

export default RecoilCanvas;