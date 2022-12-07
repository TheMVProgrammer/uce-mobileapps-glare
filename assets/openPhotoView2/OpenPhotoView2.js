import { View, Text, Image } from "react-native";
import style from "./OpenPhotoView2.Styles";
import { useState, useEffect } from "react";
import { getImages } from "../../api/pexels";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";

function OpenPhotoView2({navigation}) {

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
            <Header navigation={navigation}/>
            <View style = {style.main_content}>
                { photos.length != 0 && <Image source={{ uri: photos[7].src.large, height: 550, width: 375}} style = {style.image}/>}
                <View style = {style.modal}>
                    <Text style = {style.modal_title}>Subir desde</Text>
                    <Text style = {style.modal_desc}>Cámara</Text>
                    <Text style = {style.modal_desc}>Archivos</Text>
                </View>
            </View>
            <NavBar navigation={navigation}/>
        </View>
    );
}

export default OpenPhotoView2;