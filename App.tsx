import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Provider as PaperProvider } from 'react-native-paper';
import React, { useEffect, useState } from 'react';

//solana

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
        <StatusBar />
        <Navigation colorScheme={colorScheme} />
        </PaperProvider>
      </SafeAreaProvider>
    )      
  }

}