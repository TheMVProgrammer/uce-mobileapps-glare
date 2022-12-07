import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
import { getImages } from "../../api/pexels";
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

function Home({ navigation }) {

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
            <ScrollView style = {style.main_content}>
                <View style = {style.section}>
                    <Text style = {style.text}>Álbumes recientes</Text>
                    {photos.length != 0 && 
                        <View style = {style.section_content}>
                        <Image
                            source={{uri: photos[1].src.large}}
                            style={{height: 65, width: 65, opacity: 0.6, backgroundColor: '#717f91', borderRadius: 15}}
                        />
                        <Image
                            source={{uri: photos[2].src.large}}
                            style={{height: 65, width: 65, opacity: 0.6, backgroundColor: '#717f91', borderRadius: 15}}
                        />
                        <Image
                            source={{uri: photos[3].src.large}}
                            style={{height: 65, width: 65, opacity: 0.6, backgroundColor: '#717f91', borderRadius: 15}}
                        />
                        <Image
                            source={{uri: photos[4].src.large}}
                            style={{height: 65, width: 65, opacity: 0.6, backgroundColor: '#717f91', borderRadius: 15}}
                        />
                    </View>
                    }                     
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
            <NavBar navigation={navigation}/>
        </View>
    );
}

export default Home;