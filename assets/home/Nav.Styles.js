import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        display: 'flex',
        height: '10.2%'
    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
        shadowColor: "#000",
        //Simulating the box-shadow property haha
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 24,
        borderTopStartRadius: 75,
        borderTopEndRadius: 75,
    },
    //Here I'm going to create the top of our awesome navbar using some css tricks :)
    triangle: {
        position: 'absolute'
    },
    //Here I'm going to create the top of our awesome navbar using some css tricks :)  
    arrow: {
        width: 150,
        height: 50,
        borderStyle: 'solid',
        backgroundColor: '#fff',
        position: 'absolute',
        top: -7,

        //Simulating the box-shadow property haha
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 24
    },
    upArrowLeft: {          
        transform: [{
            rotate: '-6deg'
        }],
        marginLeft: 63
    }, 
    upArrowRight: {              
        transform: [{
            rotate: '6deg'
        }],
        marginLeft: 198.5
    },
    addButton: {
        backgroundColor: '#4969DB',
        borderRadius: 50,
        marginTop: -35
    },
    coverUnwantedShadow: {
        position: 'absolute'
    },
    //Here I'm going to cover the middle shadow between the triangle and the bottom shape  
    arrowUS: {
        width: 120,
        height: 50,
        borderStyle: 'solid',
        backgroundColor: '#fff',
        position: 'absolute',
        top: -41
    },
    upArrowLeftUS: {          
        transform: [{
            rotate: '-4deg'
        }],
        marginLeft: 37
    }, 
    upArrowRightUS: {              
        transform: [{
            rotate: '4deg'
        }],
        marginLeft: 189
    }
});

export default style;