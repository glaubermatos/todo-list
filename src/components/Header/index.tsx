import { View } from "react-native";

import { Logo } from "../Logo";
import { FormAddNewTask } from "../FormAddNewTask";

import { styles } from './styles'

export function Header() {
    return(
        <View style={styles.container} >
            <Logo />            
            <FormAddNewTask />
        </View>
    )
}