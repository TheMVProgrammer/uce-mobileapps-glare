import { View, Text, ScrollView } from "react-native";
import style from "./Home.Styles";
import Logo from "../commonFolder/Logo";
import NavBar from "../commonFolder/Navbar";
import { 
    RecentAlbum1, 
    RecentAlbum2,
    RecentAlbum3,
    RecentAlbum4,
    Nature,
    Pets,
    FastFood,
    TagFaces,
    LaRomana,
    HatoMayor,
    LaAltagracia,
    Welcome
} from "./LoadImages";

function Home() {
    return (
        <View style = {style.container}>
            <Logo/>
            <ScrollView style = {style.main_content}>
                <View style = {style.section}>
                    <Text style = {style.text}>Álbumes recientes</Text>
                    <View style = {style.section_content}>
                        <RecentAlbum1/>
                        <RecentAlbum2/>
                        <RecentAlbum3/>
                        <RecentAlbum4/>
                    </View>
                </View>
                <View style = {style.section}>
                    <Text style = {style.text}>Etiquetas</Text>
                    <View style = {style.section_content}>
                        <Nature/>
                        <Pets/>
                        <FastFood/>
                        <TagFaces/>
                    </View>
                </View>
                <View style = {style.section}>
                    <Text style = {style.text}>Lugares visitados</Text>
                    <View style = {style.section_content}>
                        <LaRomana/>
                        <HatoMayor/>
                        <LaAltagracia/>
                    </View>
                </View>
                <View style = {[style.section, style.section_content]}>
                    <Welcome/>    
                </View>
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default Home;