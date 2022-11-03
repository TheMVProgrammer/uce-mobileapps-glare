import { View } from "react-native";
import style from "./OpenPhotoView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";
import PhotoAlbum4Large from "./LoadImages";

function OpenPhotoView({navigation}) {
    return (
        <View style = {style.container}>
            <Header navigation={navigation}/>
            <View style = {style.main_content}>
                <PhotoAlbum4Large/>
            </View>
            <NavBar navigation={navigation}/>
        </View>
    );
}

export default OpenPhotoView;