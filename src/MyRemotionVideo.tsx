import { Composition } from 'remotion';
import { MyVideo } from './MyVideo';
import { WelcomeVideo } from './WelcomeVideo';

export const MyRemotionVideo: React.FC = () => {
    return (
        <Composition
            id="MyVideo"
            component={WelcomeVideo}
            durationInFrames={300}
            fps={30}
            width={1920}
            height={1080}
        />
    );
};
