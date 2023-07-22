import { Image } from "react-native";
const logoImg = require("../../../assets/logo.png")


export function Logo() {
    return(
        <Image source={logoImg} />
    )
}