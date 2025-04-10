import {Pressable, PressableProps, Text, View} from 'react-native'
import React, {forwardRef, Ref} from 'react'

interface Props extends PressableProps {
    children: string
    color?: 'primary' | 'secondary' | 'tertiary'
    variants?: 'contained' | 'text-only'
}

const CustomButton = forwardRef(({children, color = 'primary',variants, ...props}: Props, ref:Ref<View>) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color]


    if(variants == 'text-only')
    return (
        <Pressable
            {...props}
            className={`p-3 rounded-md ${btnColor} active:opacity-90`}
            ref={ref}
        >
            <Text className="text-white text-center">{children}</Text>
        </Pressable>
    )
})
export default CustomButton
