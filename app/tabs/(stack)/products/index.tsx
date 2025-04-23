import {FlatList, Text, View} from 'react-native'
import React from 'react'
import {products} from "@/store/products.store";
import {Link} from "expo-router";

const ProductsScreen = () => {
    return (
        <View className="flex flex-1 px-4">
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <View className="mt-10">
                        <Text className='text-2xl font-work-black'>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <View className="flex flex-row justify-between">
                            <Text className='font-work-black'>{item.price}</Text>
                            <Link href={`/tabs/products/${item.id}`} className="text-primary">Ver detalle</Link>
                        </View>
                    </View>
                )}
            ></FlatList>
        </View>
    )
}
export default ProductsScreen
