import {Pressable, PressableProps, Text, View} from 'react-native'
import React, {forwardRef, Ref} from 'react'

interface Props extends PressableProps {
    children: string
    color?: 'primary' | 'secondary' | 'tertiary' | 'white'
    variants?: 'contained' | 'text-only'
    className?: string,
    onPress?: () => void
}

const CustomButton = forwardRef(({children, color = 'white', variants,className,onPress, ...props}: Props, ref: Ref<View>) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
        white: 'bg-white',
    }[color]

    const textColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
        white: 'bg-white',
    }[color]


    if (variants == 'text-only') {
        return (<Pressable
            onPress={onPress}
            {...props}
            className={`p-3 ${className}`}
            ref={ref}
        >
            <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
        </Pressable>)
    }
    return (
        <Pressable
            onPress={onPress}
            {...props}
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            ref={ref}
        >
            <Text className="text-white text-center font-work-medium">{children}</Text>
        </Pressable>
    )
})
export default CustomButton
