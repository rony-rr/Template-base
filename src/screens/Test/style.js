import { 
    StyleSheet
} from 'react-native';
import Constants from 'expo-constants';

import GlobalVars from '../../global/globalVars';

const Styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    viewRoot: {
        backgroundColor: GlobalVars.fondoPrincipal,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    scrollView: {
        backgroundColor: 'transparent',
        width: '100%',
    },

    contentContainer: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 30,
        paddingHorizontal: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center',
    },

});

export default Styles;