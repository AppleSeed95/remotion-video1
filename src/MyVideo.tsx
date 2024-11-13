import { useEffect } from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';

export const MyVideo: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: 100, color: 'black', transform: `scale(${1 + frame / 100})` }}>
                Hello Remotion
            </h1>
        </AbsoluteFill>
    );
};
