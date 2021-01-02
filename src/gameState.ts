import { atom } from "recoil";

interface Point {
    x: number,
    y: number,
    z?: number
};



export const shipPositionState = atom({
    key: "shipPosition", // unique ID (with respect to other atoms/selectors)
    default: { position: {} as Point, rotation: {} as Point }, // default value (aka initial value)
});

export const enemyPositionState = atom({
    key: "enemyPosition", // unique ID (with respect to other atoms/selectors)
    default: [
        { x: -10, y: 10, z: -80 },
        { x: 20, y: 0, z: -100 },
        { x: 30, y: 0, z: -60 },
        { x: 50, y: 0, z: -20 },
    ], // default value (aka initial value)
});

export const laserPositionState = atom({
    key: "laserPositions", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

export const scoreState = atom({
    key: "score", // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});