import { Image, Text, View } from "react-native";

const emptyImg = require("../../../../assets/clipboard.png")

import { styles } from './styles'

export function EmptyTasks() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={emptyImg} />
            <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}