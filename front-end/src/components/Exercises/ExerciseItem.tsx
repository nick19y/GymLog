import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, VStack } from "native-base";


interface ExerciseItemProps{
    name: string;
    weight: number;
    repetitions: number;
}

export default function ExerciseItem({name, weight, repetitions}: ExerciseItemProps){
    return(
        <VStack>
            <VStack bg={"white"} mb={2} mx={4} borderRadius={10} paddingY={4} paddingX={2}>
                <VStack flexDir={"row"} alignContent={"center"} justifyContent={"space-around"}>
                    <VStack mt={4} ml={2}>
                        <Ionicons name="pencil" size={35}/>
                    </VStack>
                    <VStack mr={"40%"}>
                        <Text>Supino Reto</Text>
                        <Text>Carga: {weight}Kg</Text>
                        <Text>Repetições: {repetitions}</Text>
                    </VStack>
                    <VStack mt={4} mr={2}>
                        <Ionicons name="trash" size={35}/>
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    )
}