import { View, Text, ScrollView } from "react-native";
import style from "./Home.Styles";
import AddButton from "../svgFiles/navBar/AddButton.svg";
import Logo from "./Logo";


function Home() {
    return (
        <View style = {style.container}>
            <Logo/>
            <ScrollView style = {style.main_content}></ScrollView>
            <View style = {style.navigation}>
                <AddButton/>
            </View>
        </View>
    );
}

export default Home;