import * as React from 'react';

import LanguagesData from './Translations';

const traductions = LanguagesData;

export default function TranslateText(lang, word){

    // console.log({lang}, {word});
    switch( lang ) {
        case 'es':
            return traductions.es[word] ;
            break;
        case 'en':
            return traductions.en[word] ;
          break;
        default:
            return traductions.es[word] ;
    }

    return null;

}