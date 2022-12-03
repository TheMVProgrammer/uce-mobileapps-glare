import {View} from 'react-native';
import style from './AlbumView.Styles';
import PhotoAlbum1SVG from '../svgFiles/detalleAlbum/photoAlbum1.svg';
import PhotoAlbum2SVG from '../svgFiles/detalleAlbum/photoAlbum2.svg';
import PhotoAlbum3SVG from '../svgFiles/detalleAlbum/photoAlbum3.svg';
import PhotoAlbum4SVG from '../svgFiles/detalleAlbum/photoAlbum4.svg';
import PhotoAlbum5SVG from '../svgFiles/detalleAlbum/photoAlbum5.svg';
import PhotoAlbum6SVG from '../svgFiles/detalleAlbum/photoAlbum6.svg';

export function PhotoAlbum1() {
    return (
        
        <View style = {style.album_first_item}>
            <PhotoAlbum1SVG/>
        </View>
    )
}

export function PhotoAlbum2() {
    return (
        <View>
            <PhotoAlbum2SVG/>
        </View>
    )
}

export function PhotoAlbum3() {
    return (        
        <View style = {style.album_third_item}>
            <PhotoAlbum3SVG/>
        </View>
    )
}

export function PhotoAlbum4({navigation}) {
    return (
        
        <View style = {style.album_fourth_item}>
        {/* onPress={() => navigation.navigate("OpenPhotoView")} */}
            <PhotoAlbum4SVG/>
        </View>
    )
}

export function PhotoAlbum5() {
    return (
        <View>
            <PhotoAlbum5SVG style = {style.album_fith_item}/>
        </View>
    )
}

export function PhotoAlbum6() {
    return (
        <View>
            <PhotoAlbum6SVG/>
        </View>
    )
}