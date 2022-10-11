import { View, Text, ScrollView } from "react-native";
import style from "./AlbumList.Styles";
import Logo from "../commonFolder/Logo";
import NavBar from "../commonFolder/Navbar";


function AlbumList() {
    return (
        <View style = {style.container}>
            <Logo/>
            <ScrollView style = {style.main_content}>
                
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default AlbumList;