import React from "react";
import { View } from 'react-native';
import style from "./Nav.Styles";
import HomeIcon from "../svgFiles/navBar/Vector-1.svg";
import Category from "../svgFiles/navBar/Category.svg";
import AddButton from "../svgFiles/navBar/AddButton.svg";
import ImgIcon from "../svgFiles/navBar/Vector-2.svg";
import Settings from "../svgFiles/navBar/Settings.svg";

function NavBar({navigation}) {
    return (
        <View style = {style.container}>   
        {/* Navbar top */}
            <View style={style.triangle}>
                {/* Applying multiple styles two different ways for the sake of practice :3 */}
                <View style={[style.upArrowLeft, style.arrow]}></View> 
                <View style={{...style.upArrowRight, ...style.arrow}}></View> 
            </View>     
            <View style = {style.navigation}>
                <View style={style.coverUnwantedShadow}>
                    {/* Covering unwanted shadow */}
                    <View style={[style.upArrowLeftUS, style.arrowUS]}></View> 
                    <View style={{...style.upArrowRightUS, ...style.arrowUS}}></View> 
                </View>   
                <HomeIcon 
                    style = {style.homeButton} 
                    width={30} height={30}
                    onPress={() => navigation.navigate("Home")}
                />
                <Category 
                    width={30} 
                    height={30}
                    onPress={() => navigation.navigate("AlbumList")}
                    />
                <AddButton 
                    style = {style.addButton} 
                    width={73} 
                    height={73}
                    onPress={() => navigation.navigate("OpenPhotoView2")}                    
                    />
                <ImgIcon 
                    width={30} 
                    height={30}
                    /*Dejar vacío por ahora*/
                    />
                <Settings 
                    width={30} 
                    height={30}
                    /*Dejar vacío por ahora*/
                    />
            </View>
        </View>
    )
}

export default NavBar;