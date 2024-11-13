import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

export const WelcomeVideo: React.FC = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

    return (
        <AbsoluteFill style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <h1
                style={{
                    fontSize: 100,
                    color: '#140342',
                    opacity,
                    transform: `scale(${1 + frame / 100})`,
                }}
            >
                Cybermate
            </h1>
            <h2
                style={{
                    fontSize: 50,
                    color: '#140342',
                    opacity: interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" }),
                    marginTop: 20,
                }}
            >
                Welcome
            </h2>
        </AbsoluteFill>
    );
};
