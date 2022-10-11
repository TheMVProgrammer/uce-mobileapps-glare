import { View } from 'react-native';
import LogoSVG from '../Logo.svg'
import style from "./Logo.Styles";

function Logo() {
    return (
        <View style = {style.header}>
            <LogoSVG width={171} height={32} style = {style.logo}/>
        </View>        
    )
}

export default Logo;