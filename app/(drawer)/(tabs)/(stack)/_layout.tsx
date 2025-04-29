import React from 'react'
import {Stack, useNavigation} from "expo-router";
import {DrawerActions, StackActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

const StackLayout = () => {

    const navigation = useNavigation();
    const onHeaderLeftClick = (canGoBack: undefined | boolean) => {
        if (canGoBack) {
            navigation.dispatch(StackActions.pop());
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return <Stack
        screenOptions={{
            headerLeft: ({tintColor, canGoBack}) => (<Ionicons
                name={canGoBack ? "arrow-back-outline" :"grid-outline"}
                size={20}
                className="mr-5"
                onPress={() => onHeaderLeftClick(canGoBack)}
            > </Ionicons>),
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: 'green',
            },
            contentStyle: {
                backgroundColor: 'white',
            }
        }
        }
    >
        <Stack.Screen name="home/index" options={{title: 'Home'}}/>
        <Stack.Screen name="products/index" options={{title: 'Products'}}/>
        <Stack.Screen name="settings/index" options={{title: 'Settings'}}/>
        <Stack.Screen name="profile/index" options={{title: 'Profile'}}/>
        <Stack.Screen name="products/[id]" options={{title: 'Product'}}/>
    </Stack>

}
export default StackLayout
