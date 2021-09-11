import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GlobalVars = {

	/** Tracking & Register Config */
    firebaseConfig: {
	    
	},

	bannerAdsCode: "",
  intersticialAdsCode: "", 


	/** API PATH **/
	urlapi: '',


	/** KEY REQUEST **/
	keyres: '',


	/** Fonts generals fields */
	fontFamily1: 'Montserrat',
	fontFamily2: "KaushanScript",

	/** View Configurations */
	fondoPrincipal: '#FFF',
	white: '#FFF',
	black: '#000',
	googleColor: '#DC1327',
	facebookColor: '#003B8B',


	/** ViewPort Dimensions */
	windowWidth: windowWidth,
	windowHeight: windowHeight,


	/** Default Language */
	defaultLang: 'es',

};

export default GlobalVars;