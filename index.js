import { AppRegistry } from 'react-native';
import Index from './src';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(
    [
        'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]
);

AppRegistry.registerComponent('CV', () => Index);
