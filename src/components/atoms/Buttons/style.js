import * as React from 'react';

import { 
    StyleSheet,
} from 'react-native';

import GlobalVars from '../../../global/globalVars';

const Styles = StyleSheet.create({

    buttonStyle: {
        marginVertical: 10,
        width: '100%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },

    textbtn: {
        fontWeight: '600',
        fontFamily: GlobalVars.fontFamily,
        fontSize: 16,
    },

    blueStyle: {
        backgroundColor: GlobalVars.bluePantone,
        color: GlobalVars.white,
    },

    simpleStyle: {
        backgroundColor: 'transparent',
        color: GlobalVars.bluePantone,
        borderColor: GlobalVars.bluePantone,
        borderWidth: 2,
    },

    icon: {
        
    }

});

export default Styles;