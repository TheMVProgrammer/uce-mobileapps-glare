import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    main_content: {
        flex: 1,
        padding: 35,
        paddingTop: 28
    }, 
    section: {
        marginBottom: 35
    },
    text: {
        fontFamily: 'LexendGiga_800ExtraBold',
        fontSize: 16,
        lineHeight: 20,
        paddingBottom: 10,
        color: '#4E4E4E'
    },
    section_content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tag_items: {
        backgroundColor: '#F4F4F4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    places_visited: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C5C5C5',
        borderRadius: 15,
        width: 104,
        height: 122

    },
    pv_text: {
        fontSize: 11,
        lineHeight: 13.75,
        fontFamily: 'LexendGiga_600SemiBold',
        color: '#4E4E4E',
        paddingTop: 4 
    },
    welcome_section: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -23
    },
    welcome_text: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: 'LexendGiga_600SemiBold',
        color: '#4E4E4E',
        flex: 1,
        marginLeft: 8
    }
});

export default style;