import {SafeAreaView, View} from 'react-native'
import React from 'react'
import {Link, router, useNavigation} from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import {DrawerActions} from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View className="px-10 mt-5">
                <CustomButton
                    className="mb-2"
                    color="primary"
                    onPress={() => router.push('/products')}
                >
                    Products
                </CustomButton>
                <CustomButton
                    color="secondary"
                    className="mb-2"
                    onPress={() => router.push('/profile')}
                >
                    Profile
                </CustomButton>
                <CustomButton
                    color="tertiary"
                    className="mb-2"
                    onPress={() => router.push('/settings')}
                >
                    Settings
                </CustomButton>
                <CustomButton
                    color="tertiary"
                    className="mb-2"
                    onPress={onToggleDrawer}
                >
                    Abrir menu
                </CustomButton>
                <Link href="/products" asChild>

                    <CustomButton variants="text-only" className="mb-10">
                        Products
                    </CustomButton>
                </Link>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen
