import * as React from 'react';

import { 
    TouchableOpacity, Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import GlobalVars from '../../../global/globalVars';

import Styles from './style';

const styles = Styles;
const ButtonComponent = ({text, color = "blue", ...props}) => {

    const clickThisButton = () => {
        if( props.ToLogin ){
            props.ToLogin();
        }else if( props.ToSignUp ){
            props.ToSignUp();
        }else if( props.Action ){
            props.Action();
        }
    }

    if( !text )
    {
        return null; 
    }

    const styleBtn = ( color === 'blue' ) ? styles.blueStyle : styles.simpleStyle;
    const colorText = ( color === 'blue' ) ? GlobalVars.white : GlobalVars.bluePantone;
    const iconBtn = ( props.iconName && props.iconName !== '' ) 
                    ? <AntDesign name={props.iconName} size={25} 
                                    color={ ( color === 'blue' ) ? GlobalVars.white : GlobalVars.bluePantone } 
                                    style={ [styles.icon, { position: 'absolute', right: 20 }] } /> 
                    : null ;
    const iconLeft = ( props.iconLeft && props.iconLeft !== '' ) 
                    ? <AntDesign name={props.iconLeft} size={20} 
                                    color={ ( color === 'blue' ) ? GlobalVars.white : GlobalVars.bluePantone } 
                                    style={ [styles.icon, { position: 'absolute', left: 60 }] } /> 
                    : null ;

    let ButtonReturn = () => (
        <TouchableOpacity style={[styleBtn, styles.buttonStyle]}
                            onPress={ () => clickThisButton() } >
            {iconLeft}
            <Text style={ [styles.textbtn, 
                            { color: colorText, marginLeft: props.iconLeft ? 30 : null }
                        ] } >
                {text}
            </Text>
            { iconBtn }
        </TouchableOpacity>
    );        

    return <ButtonReturn />;
}

export default ButtonComponent;