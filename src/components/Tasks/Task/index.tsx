import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

import { styles } from './styles'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { theme } from "../../../styles/theme";
import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";

interface TaskProps {
    description: string;
    completed: boolean;
}

const colors = {
    default: theme.colors.gray[300],
    danger: theme.colors.danger
}

export function Task({description, completed}: TaskProps) {
    const { toggleMarkingTaskCompleted, removeTask } = useTasks()

    const [iconTrashColor, setIconTrashColor] = useState(colors.default)

    function handleToggleMarkingTaskCompleted(taskDescription: string) {
        toggleMarkingTaskCompleted(taskDescription)
    }

    function handleDeleteTask(taskName: string) {
        removeTask(taskName)
    }

    return(
        <TouchableOpacity onPress={() => handleToggleMarkingTaskCompleted(description)}  style={styles.container}>
            <BouncyCheckbox
                isChecked={completed}
                disableBuiltInState
                size={24}
                fillColor={completed ? theme.colors.purpleDark : theme.colors.blue}
                innerIconStyle={{ borderWidth: 2, }}
                onPress={() => {handleToggleMarkingTaskCompleted(description)}}
            />

            <Text style={[styles.text, completed && styles.textTaskCompleted]}>{description}</Text>

            <Pressable
                style={({pressed}) => [
                    styles.buttonDeleteTask,
                    pressed && styles.hover
                ]}
                onPress={() => handleDeleteTask(description)}
                onPressIn={() => setIconTrashColor(colors.danger)}
                onPressOut={() => setIconTrashColor(colors.default)}
            >
                <Feather name="trash-2" size={16} color={iconTrashColor} />
            </Pressable>
        </TouchableOpacity>
    )
}