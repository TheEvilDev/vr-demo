import CameraControls from "controllers/camera";
import Target from "environment/hud/target";
import Terrain from "environment/terrain";
import Loading from "objects/ArWing/Loading";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import ArWing from './objects/ArWing';
import { RecoilRoot, useRecoilBridgeAcrossReactRoots_UNSTABLE } from "recoil";

import "./styles.css";
import Lasers from "environment/lasers";
import LaserController from "controllers/laser-controller";
import Enemies from "objects/Enemy/asteroid";
import GameTimer from "gameTimer";
import ScoreCard from "environment/hud/score-card";

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

export default function App() {
  return (
      <RecoilRoot>
        <ScoreCard />
        <RecoilCanvas style={{ background: "#171717" }}>
          <CameraControls />
          <directionalLight intensity={0.5} />
          <Suspense fallback={<Loading />}>
            <ArWing />
          </Suspense>
          <Terrain />
          <Target />
          <Lasers />
          <LaserController />
          <Enemies />
          <GameTimer />
        </RecoilCanvas>
      </RecoilRoot>
  );
};