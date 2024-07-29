import { Text, VStack } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function CardTraining(){
    return(
        <VStack w={"90%"} mt={5} alignSelf={"center"} borderRadius={20} overflow={"hidden"}>
            <VStack display={"flex"} flexDir={"row"} alignItems={"center"} bg={"white"} padding={5}>
                <Ionicons name="barbell-outline" size={70}/>
                <Text ml={5}>Treino A</Text>
            </VStack>
            <VStack bg={"green.500"} display={"flex"} flexDir={"row"} justifyContent={"space-around"} p={2}>
                <Text color={"white"}>Treinos realizados:</Text>
                <Text color={"white"}>01/20</Text>
            </VStack>
        </VStack>
    )
}