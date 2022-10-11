import { View, Text, ScrollView } from "react-native";
import style from "./OpenPhotoView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";

function OpenPhotoView() {
    return (
        <View style = {style.container}>
            <Header/>
            <ScrollView style = {style.main_content}>
                
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default OpenPhotoView;