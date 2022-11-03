import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import style from "./AlbumList.Styles";
import Logo from "../commonFolder/Logo";
import NavBar from "../commonFolder/Navbar";
import {
    RectangleIcon,
    CoverAlbum1,
    CoverAlbum2,
    PreviewPhoto1,
    PreviewPhoto2,
    PreviewPhoto3,
    PreviewPhoto4,
    PreviewPhoto5,
    PreviewPhoto6,
    PreviewPhoto7,
    PreviewPhoto8
} from "./LoadImages"

function AlbumList({navigation}) {
    return (
        <View style = {style.container}>
            <Logo/>
            <View style = {style.al_info}>
                <Text style = {style.al_title}>Álbumes</Text>
                <Text style = {style.al_desc}>12 álbumes</Text>
            </View>
            <ScrollView style = {style.main_content}>
                <View style = {style.album}>
                    <View style = {style.a_info}>
                        <RectangleIcon/>
                        <View>
                            <Text 
                                style = {style.a_title}
                                onPress={() => navigation.navigate("AlbumView")}
                            >Instagram Ciudad</Text>
                            <Text 
                                style = {style.a_desc}
                                onPress={() => navigation.navigate("AlbumView")}
                            >Última modificación - Hace 1 hr</Text>
                        </View>
                    </View>
                    <View style = {style.album_prev}>
                        <CoverAlbum1 style = {style.main_photo}>
                            
                        </CoverAlbum1>
                        <View style = {style.photo_group}>
                            <PreviewPhoto1/>
                            <PreviewPhoto2/>
                            <PreviewPhoto3/>
                            <PreviewPhoto4/>
                        </View>
                    </View>
                </View>
                <View style = {style.album}>
                    <View style = {style.a_info}>
                        <RectangleIcon/>
                        <View>
                            <Text 
                                style = {style.a_title}
                                onPress={() => navigation.navigate("AlbumView")}    
                                >Instagram Playa</Text>
                            <Text 
                                style = {style.a_desc}
                                onPress={() => navigation.navigate("AlbumView")}
                                >Última modificación - Hace 1 hr</Text>
                        </View>
                    </View>
                    <View style = {style.album_prev}>
                        <CoverAlbum2 style = {style.main_photo}>
                            
                        </CoverAlbum2>
                        <View style = {style.photo_group}>
                            <PreviewPhoto5/>
                            <PreviewPhoto6/>
                            <PreviewPhoto7/>
                            <PreviewPhoto8/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation}/>
        </View>
    );
}

export default AlbumList;