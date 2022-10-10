import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  LexendGiga_100Thin,
  LexendGiga_200ExtraLight,
  LexendGiga_300Light,
  LexendGiga_400Regular,
  LexendGiga_500Medium,
  LexendGiga_600SemiBold,
  LexendGiga_700Bold,
  LexendGiga_800ExtraBold,
  LexendGiga_900Black,
} from '@expo-google-fonts/lexend-giga';

SplashScreen.preventAutoHideAsync();

export default () => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
          try {
            // Pre-load fonts, make any API calls you need to do here
            await Font.loadAsync({LexendGiga_100Thin,
                LexendGiga_200ExtraLight,
                LexendGiga_300Light,
                LexendGiga_400Regular,
                LexendGiga_500Medium,
                LexendGiga_600SemiBold,
                LexendGiga_700Bold,
                LexendGiga_800ExtraBold,
                LexendGiga_900Black});
          } catch (e) {
            console.warn(e);
          } finally {
            // Tell the application to render
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          // This tells the splash screen to hide immediately! If we call this after
          // `setAppIsReady`, then we may see a blank screen while the app is
          // loading its initial state and rendering its first pixels. So instead,
          // we hide the splash screen once we know the root view has already
          // performed layout.
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      let fontSize = 24;
      let paddingVertical = 6;
    
      if (!appIsReady) {
        return null;
      }
    
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onLayout={onLayoutRootView}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_100Thin',
          }}>
          Lexend Giga Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_200ExtraLight',
          }}>
          Lexend Giga Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_300Light',
          }}>
          Lexend Giga Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_400Regular',
          }}>
          Lexend Giga Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_500Medium',
          }}>
          Lexend Giga Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_600SemiBold',
          }}>
          Lexend Giga Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_700Bold',
          }}>
          Lexend Giga Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_800ExtraBold',
          }}>
          Lexend Giga Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendGiga_900Black',
          }}>
          Lexend Giga Black
        </Text>
        </View>
      );
    };