import { View, Text } from 'react-native';
import LeftArrow from "../svgFiles/LeftArrow.svg";
import style from "./Header.Styles";

function Header() {
    return (
        <View style = {style.header}>
            <LeftArrow/>
            <Text style = {style.headerText}>Instagram álbum</Text>
        </View>       
    )
}

export default Header;