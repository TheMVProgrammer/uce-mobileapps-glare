import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import style from "./OpenPhotoView.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";
// import PhotoAlbum4Large from "./LoadImages";
import { getImages } from '../../api/pexels';

function OpenPhotoView({ route, navigation }) {
    

    const { image } = route.params;

    const [photos, setPhotos] = useState([]);

    const loadImages = async () =>  {
        const res = await getImages();
        setPhotos(res.data.photos);
    }

    useEffect(() => {
        loadImages();
    }, [])

    return (
        <View style = {style.container}>
            <Header navigation={navigation}/>
            <View style = {style.main_content}>
                <Image source={{ uri: image.src.large, height: 550}} style = {style.image}/>
            </View>
            <NavBar navigation={navigation}/>
        </View>
    );
}

export default OpenPhotoView;