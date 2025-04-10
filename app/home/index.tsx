import {SafeAreaView, Text, View} from 'react-native'
import React from 'react'
import {Link, router} from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text>HomeScreen</Text>

                <Link href="/products" asChild>

                    <CustomButton>
                        Products
                    </CustomButton>
                </Link>

                <CustomButton
                    onPress={() => router.push('/products')}
                >
                    Products
                </CustomButton>
                <Link href="/products">Products</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/settings">Settings</Link>

            </View>
        </SafeAreaView>
    )
}
export default HomeScreen
