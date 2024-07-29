import { CustomButtom } from "@/src/components/CustomButton";
import { Logo } from "@/src/components/Logo";
import { Title } from "@/src/components/Title";
import { TrainingItem } from "@/src/components/TrainingOn/TrainingItem";
import { ScrollView, VStack } from "native-base";

export default function TrainingPreparation({navigation}:any){
    return(
        <VStack flex={1}>
            <VStack my={10}>
                <Logo/>
                <Title text="Treino A"/>
            </VStack>
            <ScrollView>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
                <TrainingItem name="Supino reto" weight={20} repetitions={20}/>
            </ScrollView>
            <VStack h={100} justifyContent={"center"} alignContent={"center"} bg={"white"}>
                <CustomButtom title="Iniciar" color="green.500" onPress={()=>navigation.navigate('TrainingOn')}/>
            </VStack>
        </VStack>
    )
}