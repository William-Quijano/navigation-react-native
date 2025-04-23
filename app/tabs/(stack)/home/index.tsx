import {SafeAreaView, Text, View} from 'react-native'
import React from 'react'
import {Link, router} from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View className="px-10 mt-5">



                <CustomButton
                    className="mb-2"
                    color="primary"
                    onPress={() => router.push('/tabs/products')}
                >
                    Products
                </CustomButton>
                <CustomButton
                color="secondary"
                    className="mb-2"
                    onPress={() => router.push('/tabs/profile')}
                >
                    Profile
                </CustomButton>
                <CustomButton
                    color="tertiary"
                    className="mb-2"
                    onPress={() => router.push('/tabs/settings')}
                >
                    Settings
                </CustomButton>
                <Link href="/tabs/products" asChild>

                    <CustomButton variants="text-only" className="mb-10" >
                        Products
                    </CustomButton>
                </Link>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen
