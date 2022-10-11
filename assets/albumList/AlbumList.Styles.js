import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },    
    al_info: { //Album List Info
        paddingLeft: 35
    },
    al_title: { // Album List title
        fontFamily: 'LexendGiga_800ExtraBold',
        fontSize: 16,
        color: '#4E4E4E'        
    },
    al_desc: { // Album List description
        fontFamily: 'LexendGiga_400Regular',
        fontSize: 13,
        lineHeight: 16.25,
        marginBottom: 43,
        color: '#4E4E4E'
    },
    main_content: {
        flex: 1,
        padding: 35,
        paddingTop: 0
    },
    album : {
        marginBottom: 43
    },
    a_info: { //Album info
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15
    },
    info_icon: { 
        paddingRight: 17
    },
    a_title: { // Album title
        fontFamily: 'LexendGiga_800ExtraBold',
        fontSize: 14,
        color: '#4E4E4E',
        lineHeight: 17.5
    },
    a_desc: { // Album description
        fontFamily: 'LexendGiga_400Regular',
        fontSize: 11,
        lineHeight: 13.75,
        color: '#8a8a8a',
        width: 186,
        height:35
    },
    album_prev: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    photo_group: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',  
        justifyContent: 'space-between',   
        width: 160,
        height: 160
    },
    photo_item: {
        paddingBottom: 10
    }
});

export default style;