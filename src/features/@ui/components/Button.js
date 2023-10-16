import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { colors, sizes } from "../../../constants/theme";

const Button = (props) => {
    return (
        <TouchableOpacity
            style={[styles.btn, props.style]}
            onPress={props.onPress}
        >
            {props.children}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        padding: sizes.base,
        paddingVertical: sizes.base/2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:sizes.radius,
        backgroundColor: colors.secondary
    },
})
