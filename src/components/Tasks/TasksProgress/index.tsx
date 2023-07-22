import { View } from "react-native";
import { ProgressText } from "./ProgressText";

import { styles } from './styles'
import { useTasks } from "../../../hooks/useTasks";

export function TasksProgress() {
    const {tasksCreated, tasksCompleted} = useTasks()

    return(
        <View style={styles.container}>
            <ProgressText text="Criadas" amount={tasksCreated} />
            <ProgressText text="Concluídas" amount={tasksCompleted} />
        </View>
    )
}