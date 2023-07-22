import { FlatList, SafeAreaView, View } from "react-native";

import { styles } from './styles'
import { TasksProgress } from "./TasksProgress";
import { EmptyTasks } from "./EmptyTasks";
import { Task } from "./Task";
import { useTasks } from "../../hooks/useTasks";

export function Tasks() {
    const {tasks} = useTasks()

    return(
        <View style={styles.container}>
            <TasksProgress />
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{marginTop: 20}}
                data={tasks}
                renderItem={({item}) => <Task key={item.description} description={item.description} completed={item.completed} />}
                ListEmptyComponent={() => <EmptyTasks />}
            />
        </View>
    )
}