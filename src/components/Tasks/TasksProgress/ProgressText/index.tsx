import { Text, View } from "react-native";

import {styles} from './styles'

interface ProgressTextProps {
    text: 'Criadas' | 'Concluídas';
    amount: number;
}

export function ProgressText({text, amount}: ProgressTextProps) {
    return(
        <View style={styles.container}>
            <Text
                style={[
                    styles.progressText,
                    text === 'Criadas' ? styles.progressTextCreated : styles.progressTextCompleted
                ]}
            >
                {text}
            </Text>
            
            <View style={styles.progressTextAmountContainer}>
                <Text style={styles.progressTextAmount}>{amount}</Text>
            </View>
        </View>
    )
}