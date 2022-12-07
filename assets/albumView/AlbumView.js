import { View, FlatList, SafeAreaView, Text } from "react-native";
import style from "./AlbumView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";
import { getImages } from "../../api/pexels";
import ImageList from "../../components/ImageList";
import { useEffect, useState } from "react";
// import { 
//     PhotoAlbum1,
//     PhotoAlbum2,
//     PhotoAlbum3,
//     PhotoAlbum4,
//     PhotoAlbum5,
//     PhotoAlbum6,
//  } from "./LoadImages";

//  const DATA = [
//     {
//       id: 1,
//       image: <PhotoAlbum1/>
//     },
//     {
//       id: 2,
//       image: <PhotoAlbum2/>
//     },
//     {
//       id: 3,
//       image: <PhotoAlbum3/>
//     },
//     {
//       id: 4,
//       image: <PhotoAlbum4/>
//     },
//     {
//       id: 5,
//       image: <PhotoAlbum5/>
//     },
//     {
//       id: 6,
//       image: <PhotoAlbum6/>
//     }
//   ];

function AlbumView({navigation}) {

  const [photos, setPhotos] = useState([])

    const loadImages = async () =>  {
        const res = await getImages();
        setPhotos(res.data.photos);
    }

  useEffect(() => {
    loadImages();
  }, [])

  return (
    <View style = {style.container}> 
      <Header navigation={navigation}/>
      <View style = {style.main_content}>
        <ImageList photos={photos}/>
      </View>
      <NavBar navigation={navigation}/>
    </View>
  )

    // const renderItem = ({ item }) => (
    //     <View>
    //         {item.image}
    //     </View>
    //   );

    // return (      
    //     <View style = {style.container}> 
    //         <Header navigation={navigation}/>
    //         <SafeAreaView style = {style.main_content}> 
    //             <FlatList 
    //                 key={"_"}
    //                 data={DATA}
    //                 renderItem={renderItem}
    //                 keyExtractor={item => "_" + item.id}
    //                 numColumns={2}
    //                 contentContainerStyle={style.flat_list}
    //                 // horizontal={false}
    //             />                    
    //         </SafeAreaView>
    //         <NavBar navigation={navigation}/>
    //     </View>
    // );
}

export default AlbumView;