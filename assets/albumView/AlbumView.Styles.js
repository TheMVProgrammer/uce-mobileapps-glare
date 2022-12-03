import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    main_content: {
        flex: 1,
        // padding: 20,
        paddingTop: 0,
        paddingBottom: 0,               
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    flat_list: {
        display: "flex",
        paddingTop: 20, 
        paddingBottom: 25, 
    },
    album_first_item: {
        alignSelf: 'flex-start',
        height: 0,
        marginRight: 10
    },
    album_third_item: {
        alignSelf: 'flex-start',
        marginTop: -34,
        marginBottom: 10,
        marginRight: 10
    }, 
    album_fourth_item: {
        alignSelf: 'flex-end',
        marginTop: 10
    },
    album_fith_item: {
        marginRight: 10
    }

});

export default style;