import { CustomButtom } from "@/src/components/CustomButton";
import ExerciseItem from "@/src/components/Exercises/ExerciseItem";
import { Logo } from "@/src/components/Logo";
import { Title } from "@/src/components/Title";
import { TrainingItem } from "@/src/components/TrainingOn/TrainingItem";
import { ScrollView, VStack } from "native-base";

export default function Exercises({navigation}:any){
    return(

        <VStack flex={1}>
            <VStack my={5}>
                <Logo/>
                <Title text="Exercícios"/>
            </VStack>
            <ScrollView>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
                <ExerciseItem name="Supino reto" weight={10} repetitions={12}/>
            </ScrollView>
            <VStack padding={5}>
                <CustomButtom title="Adicionar Exercício" color="green.500" onPress={()=>navigation.navigate('CreateExercise')}/>
            </VStack>
        </VStack>
    )
}