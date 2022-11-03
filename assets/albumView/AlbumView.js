import { View, Text, ScrollView } from "react-native";
import style from "./AlbumView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";
import { 
    PhotoAlbum1,
    PhotoAlbum2,
    PhotoAlbum3,
    PhotoAlbum4,
    PhotoAlbum5,
    PhotoAlbum6,
 } from "./LoadImages";

function AlbumView({navigation}) {
    return (
        <View style = {style.container}>
            <Header navigation={navigation}/>
            <ScrollView>
                <View style = {style.main_content}>
                    <PhotoAlbum1/>
                    <PhotoAlbum2/>
                    <PhotoAlbum3/>
                    <PhotoAlbum4 navigation={navigation}/>
                    <PhotoAlbum5/>
                    <PhotoAlbum6/>
                </View>
            </ScrollView>
            <NavBar navigation={navigation}/>
        </View>
    );
}

export default AlbumView;