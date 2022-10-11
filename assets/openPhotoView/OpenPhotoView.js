import { View } from "react-native";
import style from "./OpenPhotoView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";
import PhotoAlbum4Large from "./LoadImages";

function OpenPhotoView() {
    return (
        <View style = {style.container}>
            <Header/>
            <View style = {style.main_content}>
                <PhotoAlbum4Large/>
            </View>
            <NavBar/>
        </View>
    );
}

export default OpenPhotoView;