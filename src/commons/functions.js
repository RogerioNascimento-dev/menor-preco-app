import {Dimensions} from 'react-native';

export function widthScreemPercent(percent){
    const {width} = Dimensions.get('window');
    return width * percent;
}

export function heightScreemPercent(percent){
    const {height} = Dimensions.get('window');
    return height * percent;
}