import { View, Text, ScrollView } from "react-native";
import style from "./AlbumView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";

function AlbumView() {
    return (
        <View style = {style.container}>
            <Header/>
            <ScrollView style = {style.main_content}>
                
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default AlbumView;