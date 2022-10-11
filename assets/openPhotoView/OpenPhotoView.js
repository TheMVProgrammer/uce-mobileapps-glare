import { View, ScrollView } from "react-native";
import style from "./OpenPhotoView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";
import PhotoAlbum4Large from "./LoadImages";

function OpenPhotoView() {
    return (
        <View style = {style.container}>
            <Header/>
            <ScrollView style = {style.main_content}>
                <PhotoAlbum4Large/>
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default OpenPhotoView;