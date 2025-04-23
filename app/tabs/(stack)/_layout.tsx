import React from 'react'
import {Stack} from "expo-router";

const StackLayout = () => {
    return <Stack
        screenOptions={{
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
