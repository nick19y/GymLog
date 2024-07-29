import { CustomButtom } from "@/src/components/CustomButton";
import ExerciseItem from "@/src/components/Exercises/ExerciseItem";
import { InputText } from "@/src/components/InputText";
import { Logo } from "@/src/components/Logo";
import { Title } from "@/src/components/Title";
import { ScrollView, Text, VStack } from "native-base";

export default function AddTraining({navigation}:any){
    return(
        <VStack flex={1}>
            <VStack mt={10} mb={1}>
                <Logo/>
                <Title text="Cadastro de Treino"/>
            </VStack>
            <VStack>
                <InputText label="Nome" placeholder="Digite o nome do treino"/>
                <InputText marginRight="64%" label="Descrição" placeholder="Digite a descrição"/>
            </VStack>
            <VStack>
                <Title text="Exercícios"/>
                <Text alignSelf={"center"}>Selecione os exercícios deste treino</Text>
            </VStack>
            <ScrollView mt={4}>
                <ExerciseItem name="Supino reto" weight={20} repetitions={10}/>
                <ExerciseItem name="Supino reto" weight={20} repetitions={10}/>
                <ExerciseItem name="Supino reto" weight={20} repetitions={10}/>
                <ExerciseItem name="Supino reto" weight={20} repetitions={10}/>
                <ExerciseItem name="Supino reto" weight={20} repetitions={10}/>
                <ExerciseItem name="Supino reto" weight={20} repetitions={10}/>
                <ExerciseItem name="Supino reto" weight={20} repetitions={10}/>
            </ScrollView>
                <VStack mt={2} mb={2}>
                    <CustomButtom color="green.500" title="Cadastrar exercício" onPress={()=>navigation.navigate('Treinos')}/>
                </VStack>
        </VStack>
    )
}