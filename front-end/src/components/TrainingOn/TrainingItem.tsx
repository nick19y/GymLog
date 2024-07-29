import { Text, VStack } from "native-base";

interface TrainingItemProps{
    name: string;
    weight: number;
    repetitions: number;
}


export function TrainingItem({name, weight, repetitions}: TrainingItemProps){
    return(
        <VStack bg={"white"} mb={2} mx={4} borderRadius={10} paddingY={4} paddingX={2}>
            <Text ml={8}>{name}</Text>
            <VStack flexDir={"row"} justifyContent={"space-around"}>
                <Text>Carga: {weight}Kg</Text>
                <Text>Repetições: {repetitions}</Text>
            </VStack>
        </VStack>
    )
}