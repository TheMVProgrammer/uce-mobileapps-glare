import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    main_content: {
        flex: 1,
        padding: 35,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 130,
        height: 98,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,

        //Simulates box-shadow property

        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 6

    },
    modal_title: {
        fontFamily: 'LexendGiga_300Light',
        fontSize: 12,
        lineHeight: 15
    },
    modal_desc: {
        fontFamily: 'LexendGiga_600SemiBold',
        fontSize: 16,
        lineHeight: 20,
        color: '#4e4e4e'
    }
});

export default style;