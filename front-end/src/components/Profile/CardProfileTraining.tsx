import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, VStack } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

interface CardTrainingProps{
    title: string;
    icon: any;
    onPress?:()=>any;
}


export function CardProfileTraining({title, icon, onPress}:CardTrainingProps){
    return(
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <VStack bg={"white"} alignItems={"center"} borderRadius={"2xl"} h={"32"} justifyContent={"center"}>
                    <Ionicons name={icon} size={70} color={"#00d435"}/>
                    <Text color={"black"}>{title}</Text>
                </VStack>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        width: "45%"
    }
})