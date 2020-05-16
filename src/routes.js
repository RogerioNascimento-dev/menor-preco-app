import React from 'react';
import {Button,TouchableOpacity,Text} from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesome, Entypo } from "@expo/vector-icons";
import colors from './commons/colors';

//Importação dos componentes de tela
import Login from './pages/login';
import Main from './pages/main';
import NovaLista from './pages/novalista';
import Products from './pages/products';
import AddProduct from './pages/products/add';
import Account from './pages/account';



const RouteStack = createStackNavigator({    
    Main:{
        screen: Main,
        title:"Suas listas",
    },
    NovaLista:{
        screen:NovaLista,
        navigationOptions:{
            title:'Escanear código de barras'
        }
    },    
   
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:colors.light.principal
        },
        headerTintColor:'#FFF'
    },
});

const RoutesProductsStack = createStackNavigator({    
    Products:{
        screen: Products,
        navigationOptions:{
            title:"Produtos",            
        }
    },
    AddProduct:{
        screen:AddProduct,
        navigationOptions:{
            title:'Escanear código de barras'
        }
    },    
   
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:colors.light.principal
        },
        headerTintColor:'#FFF'
    },
});

const RouteBottom = createBottomTabNavigator({
    Principal:{
        screen: createAppContainer(RouteStack),
        navigationOptions:{
            title:'Lista',
            tabBarIcon: <FontAwesome color={colors.light.principal} size={24} name="list" />
        }
    },
    Products:{
        screen: createAppContainer(RoutesProductsStack),
        navigationOptions:{
            title:'Produtos',
            tabBarIcon: <FontAwesome color={colors.light.principal} name="shopping-cart" size={24}  />
        }
    },
    Account:{
        screen: Account,
        navigationOptions:{
            tabBarIcon: <FontAwesome color={colors.light.principal} name="user" size={24}  />
        }
    }
})

export default (isSigned = true) =>
createAppContainer(
    createSwitchNavigator(
        {
        Login:{
            screen: Login,
            navigationOptions:{
                title: "Tela de Login"
            }
        },
        Main:{
            screen: createAppContainer(RouteBottom),        
        }
    },
    {initialRouteName: isSigned?'Main':'Login'})
)


//atribuindo botão no lado direito da barra de navegação
Main.navigationOptions =({navigation}) =>{
    return{        
        title: "Suas Listas",
        headerRight:() =>(
            <TouchableOpacity style={{marginRight:20}} title="Teste" onPress={()=> (navigation.navigate('NovaLista'))}>
                <Entypo name="plus" size={30} color="#FFF" />                
            </TouchableOpacity>
        )
    }
}