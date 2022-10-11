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

function AlbumView() {
    return (
        <View style = {style.container}>
            <Header/>
            <ScrollView>
                <View style = {style.main_content}>
                    <PhotoAlbum1/>
                    <PhotoAlbum2/>
                    <PhotoAlbum3/>
                    <PhotoAlbum4/>
                    <PhotoAlbum5/>
                    <PhotoAlbum6/>
                </View>
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default AlbumView;