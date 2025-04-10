import React from 'react'
import {Link, Redirect} from "expo-router";

const App = () => {
    return (

        <Redirect href="/home"  />
        // <SafeAreaView>
        //     <View className="mt-6 mx-2.5">
        //         <Text
        //             style={{fontFamily: 'WorkSans-Black'}}
        //             className="text-3xl text-primary ">Hola mundo</Text>
        //
        //
        //         <Text className="text-3xl text-secondary font-work-black">Hola mundo</Text>
        //         <Text className="text-3xl text-secondary-100 font-work-medium">Hola mundo</Text>
        //         <Text className="text-3xl text-secondary-200 font-work-light">Hola mundo</Text>
        //         <Link href='/products'>
        //             Products
        //         </Link>
        //     </View>
        // </SafeAreaView>
    )
}
export default App
