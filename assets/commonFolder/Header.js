import { View, Text } from 'react-native';
import LeftArrow from "../svgFiles/LeftArrow.svg";
import style from "./Header.Styles";

function Header({navigation}) {
    return (
        <View style = {style.header}>
            <LeftArrow/>
            <Text style = {style.headerText} onPress={() => navigation.navigate("AlbumList")}>Instagram álbum</Text>
        </View>       
    )
}

export default Header;