import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    main_content: {
        display: 'flex',
        padding: 35,
        paddingTop: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    album_first_item: {
        alignSelf: 'flex-start',
        height: 0
    },
    album_third_item: {
        alignSelf: 'flex-start',
        marginTop: -34,
        marginBottom: 17
    }, 
    album_fourth_item: {
        alignSelf: 'flex-end',
        marginBottom: 17
    }

});

export default style;