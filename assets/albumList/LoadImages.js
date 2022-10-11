import { View, Text } from 'react-native';
import style from './AlbumList.Styles';
import RectangleIconSVG from '../svgFiles/listaAlbumes/RectangleIcon.svg';
import CoverAlbum1SVG from '../svgFiles/listaAlbumes/coverAlbum1.svg';
import CoverAlbum2SVG from '../svgFiles/listaAlbumes/coverAlbum2.svg';
import PreviewPhoto1SVG from '../svgFiles/listaAlbumes/previewPhoto1.svg';
import PreviewPhoto2SVG from '../svgFiles/listaAlbumes/previewPhoto2.svg';
import PreviewPhoto3SVG from '../svgFiles/listaAlbumes/previewPhoto3.svg';
import PreviewPhoto4SVG from '../svgFiles/listaAlbumes/previewPhoto4.svg';
import PreviewPhoto5SVG from '../svgFiles/listaAlbumes/previewPhoto5.svg';
import PreviewPhoto6SVG from '../svgFiles/listaAlbumes/previewPhoto6.svg';
import PreviewPhoto7SVG from '../svgFiles/listaAlbumes/previewPhoto7.svg';
import PreviewPhoto8SVG from '../svgFiles/listaAlbumes/previewPhoto8.svg';

export function RectangleIcon() {
    return (
        <View style = {style.info_icon}>
            <RectangleIconSVG width={50} height={50}/>
        </View>        
    )
}

export function CoverAlbum1() {
    return (
        <View>
            <CoverAlbum1SVG width={160} height={160}/>
        </View>        
    )
}

export function CoverAlbum2() {
    return (
        <View>
            <CoverAlbum2SVG width={160} height={160}/>
        </View>        
    )
}

export function PreviewPhoto1() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto1SVG width={77} height={75}/>
        </View>        
    )
}

export function PreviewPhoto2() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto2SVG width={77} height={75}/>
        </View>        
    )
}

export function PreviewPhoto3() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto3SVG width={77} height={75}/>
        </View>        
    )
}

export function PreviewPhoto4() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto4SVG width={77} height={75}/>
        </View>        
    )
}

export function PreviewPhoto5() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto5SVG width={77} height={75}/>
        </View>        
    )
}

export function PreviewPhoto6() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto6SVG width={77} height={75}/>
        </View>        
    )
}

export function PreviewPhoto7() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto7SVG width={77} height={75}/>
        </View>        
    )
}

export function PreviewPhoto8() {
    return (
        <View style = {style.photo_item}>
            <PreviewPhoto8SVG width={77} height={75}/>
        </View>        
    )
}