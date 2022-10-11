import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './assets/home/Home';
import AlbumList from './assets/albumList/AlbumList.js';
import AlbumView from './assets/albumView/AlbumView.js';
import OpenPhotoView from './assets/openPhotoView/OpenPhotoView.js';
import OpenPhotoView2 from './assets/openPhotoView2/OpenPhotoView2.js';
import {
  useFonts,
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

export default function App() {

  let [fontsLoaded] = useFonts({
    LexendGiga_100Thin,
    LexendGiga_200ExtraLight,
    LexendGiga_300Light,
    LexendGiga_400Regular,
    LexendGiga_500Medium,
    LexendGiga_600SemiBold,
    LexendGiga_700Bold,
    LexendGiga_800ExtraBold,
    LexendGiga_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style = {styles.container}>
      {/* <Home/> */}
      {/* <AlbumList/> */}
      {/* <AlbumView/> */}
      {/* <OpenPhotoView/> */}
      <OpenPhotoView2/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
