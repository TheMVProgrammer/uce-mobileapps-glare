import { View, Text } from 'react-native';
import style from './Home.Styles'
import RecentAlbum1SVG from "../svgFiles/inicio/recentAlbum1.svg";
import RecentAlbum2SVG from "../svgFiles/inicio/recentAlbum2.svg";
import RecentAlbum3SVG from "../svgFiles/inicio/recentAlbum3.svg";
import RecentAlbum4SVG from "../svgFiles/inicio/recentAlbum4.svg";
import NatureSVG from "../svgFiles/inicio/Nature.svg";
import PetsSVG from "../svgFiles/inicio/Pets.svg";
import FastFoodSVG from "../svgFiles/inicio/Fastfood.svg";
import TagFacesSVG from "../svgFiles/inicio/TagFaces.svg";
import LaRomanaSVG from "../svgFiles/inicio/LaRomana.svg";
import HatoMayorSVG from "../svgFiles/inicio/HatoMayor.svg";
import LaAltagraciaSVG from "../svgFiles/inicio/LaAltagracia.svg";
import WelcomeSVG from "../svgFiles/inicio/Welcome.svg";

export function RecentAlbum1() {
    return (
        <View>
            <RecentAlbum1SVG width={65} height={65} fill="#717f91" fill-opacity="0.6"/>
        </View>        
    )
}
export function RecentAlbum2() {
    return (
        <View>
            <RecentAlbum2SVG width={65} height={65}/>
        </View>        
    )
}
export function RecentAlbum3() {
    return (
        <View>
            <RecentAlbum3SVG width={65} height={65}/>
        </View>        
    )
}
export function RecentAlbum4() {
    return (
        <View>
            <RecentAlbum4SVG width={65} height={65}/>
        </View>        
    )
}

export function Pets() {
    return (
        <View style = {style.tag_items} width = {65} height = {65}>
            <PetsSVG/>
        </View>        
    )
}

export function Nature() {
    return (
        <View style = {style.tag_items} width = {65} height = {65}>
            <NatureSVG/>
        </View>
    )
}

export function FastFood() {
    return (
        <View style = {style.tag_items} width = {65} height = {65}>
            <FastFoodSVG/>
        </View>
    )
}

export function TagFaces() {
    return (
        <View style = {style.tag_items} width = {65} height = {65}>
            <TagFacesSVG/>
        </View>
    )
}

export function LaRomana() {
    return (
        <View style = {style.places_visited}>
            <LaRomanaSVG width={94} height={90}/>
            <Text style = {style.pv_text}>La Romana</Text>
        </View>
    )
}

export function HatoMayor() {
    return (
        <View style = {style.places_visited}>
            <HatoMayorSVG width={94} height={90}/>
            <Text style = {style.pv_text}>Hato Mayor</Text>
        </View>
    )
}

export function LaAltagracia() {
    return (
        <View style = {style.places_visited}>
            <LaAltagraciaSVG width={94} height={90}/>
            <Text style = {style.pv_text}>La Altag...</Text>
        </View>
    )
}

export function Welcome() {
    return (
        <View style = {style.welcome_section}>
            <WelcomeSVG width = {168} height = {120}/>
            <Text style = {style.welcome_text}>¡Organiza y filtra tus colecciones al instante!</Text> 
        </View>
    )
}