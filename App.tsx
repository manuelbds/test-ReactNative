import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Routes from './src/routes';

const App: React.FC = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function preload() {
      await loadResourcesAsync();
      setLoadingComplete(true);
    }
    preload();
  }, []);

  return (
    <>
      {isLoadingComplete && (
        <>
          <Routes />
          <StatusBar style="auto" />
        </>
      )}
    </>
  );
};

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    }),
  ]);
}

export default App;
