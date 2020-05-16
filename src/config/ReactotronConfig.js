import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if(__DEV__){
    const tron =  Reactotron
    .configure({ host:'10.0.2.2'})
    //.configure({host:'menor-preco-api.herokuapp.com'})
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

    tron.clear();
    console.tron = tron;
}