import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { getImages } from "../../api/pexels";
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

    const [photos, setPhotos] = useState([])

    const loadImages = async () =>  {
        const res = await getImages();
        setPhotos(res.data.photos);
    }

    useEffect(() => {
        loadImages();
    }, [])

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
                    {
                        photos.length != 0 &&
                        
                        <View style = {style.album_prev}>
                        <Image
                            source={{uri: photos[5].src.large}}
                            style={{height: 160, width: 160, borderRadius: 15}}
                        />
                        <View style = {style.photo_group}>
                            <Image
                                source={{uri: photos[6].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15, marginBottom: 10}}
                            />
                            <Image
                                source={{uri: photos[7].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15, marginBottom: 10}}
                            />
                            <Image
                                source={{uri: photos[8].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15}}
                            />
                            <Image
                                source={{uri: photos[9].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15}}
                            />
                        </View>
                    </View>}
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
                    {
                        photos.length != 0 &&
                        
                    <View style = {style.album_prev}>
                        <Image
                            source={{uri: photos[10].src.large}}
                            style={{height: 160, width: 160, borderRadius: 15}}
                        />
                        <View style = {style.photo_group}>
                            <Image
                                source={{uri: photos[11].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15, marginBottom: 10}}
                            />
                            <Image
                                source={{uri: photos[12].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15, marginBottom: 10}}
                            />
                            <Image
                                source={{uri: photos[13].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15}}
                            />
                            <Image
                                source={{uri: photos[14].src.large}}
                                style={{height: 75, width: 77, borderRadius: 15}}
                            />
                        </View>
                    </View>}
                </View>
            </ScrollView>
            <NavBar navigation={navigation}/>
        </View>
    );
}

export default AlbumList;