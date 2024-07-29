import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, VStack } from "native-base";
import { CardProfileTraining } from "./CardProfileTraining";

export default function CardProfile(){
    return(
        <VStack bg={"white"} padding={10}>
            <VStack display={"flex"} alignItems={"center"} bg={"green.500"} w={"80%"} alignSelf={"center"} padding={10} borderRadius={20}>
                <Ionicons name="person" color={"white"} size={50}/>
                <Text fontSize={20} color={"white"}>Nícolas de Godoi</Text>
            </VStack>
        </VStack>
    )
}