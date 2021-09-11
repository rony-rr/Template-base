import * as React from 'react';
import { NativeBaseProvider } from 'native-base';

import AppNavigator from '../StackTabs';

const RootApp = () => (
    <NativeBaseProvider>
        <AppNavigator />
    </NativeBaseProvider>
);

export default RootApp;