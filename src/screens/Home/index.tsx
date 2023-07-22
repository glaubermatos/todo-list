import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { TaskProvider } from '../../contexts/TaskContext';

import { styles } from './styles'
import { Header } from '../../components/Header';
import { Tasks } from '../../components/Tasks';

export function Home() {
  return (
    <TaskProvider>
        <StatusBar style="light" translucent />

        <View style={styles.container}>
            <Header />
            <Tasks />
        </View>
    </TaskProvider>
  );
}

