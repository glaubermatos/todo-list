import { View } from "react-native";

import { styles } from './styles'
import { Input } from "../Input";
import { Button } from "../Button";
import { useTasks } from "../../hooks/useTasks";
import { useState } from "react";

export function FormAddNewTask() {
    const { addNewTask } = useTasks()

    const [taskDescription, setTaskDescription] = useState('')

    function handleCreateNewTask() {
        if (!taskDescription) {
            return
        }
        
        addNewTask(taskDescription)
        setTaskDescription('')
    }

    return(
        <View style={styles.container}>
            <Input
                placeholder='Adicione uma nova tarefa'
                value={taskDescription}
                onChangeText={setTaskDescription}
            />
            <Button onPress={handleCreateNewTask} />
        </View>
    )
}