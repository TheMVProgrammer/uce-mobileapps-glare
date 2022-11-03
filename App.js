import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}} /* Puse esto porque se ve feo con el header :3 */
      > 
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: "Welcome" }}  
        />
        <Stack.Screen 
          name="AlbumList" 
          component={AlbumList} 
          options={{ title: "Albumes" }}
          />
        <Stack.Screen 
          name="AlbumView" 
          component={AlbumView} 
          options={{ title: "Album" }}
          />
        <Stack.Screen 
          name="OpenPhotoView" 
          component={OpenPhotoView} 
          options={{ title: "Detalle" }}
          />
        <Stack.Screen 
          name="OpenPhotoView2" 
          component={OpenPhotoView2} 
          options={{ title: "Detalle + modal" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style = {styles.container}>
    //   <Home/>
    //   {/* <AlbumList/> */}
    //   {/* <AlbumView/> */}
    //   {/* <OpenPhotoView/> */}
    //   {/* <OpenPhotoView2/>  */}
    //   <StatusBar style="auto" />
    // </View>
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
