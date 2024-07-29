import { CustomButtom } from "@/src/components/CustomButton";
import { InputText } from "@/src/components/InputText";
import { Logo } from "@/src/components/Logo";
import { Title } from "@/src/components/Title";
import { FormControl, Input, VStack } from "native-base";

export default function CreateExercise({navigation}:any){
    return(
        <VStack>
            <VStack mt={10} mb={5}>
                <Logo/>
                <Title text="Cadastro de exercício"/>
            </VStack>
            <VStack>
                <InputText label="Nome" placeholder="Digite o nome do exercício"/>
                <InputText label="Carga" placeholder="Digite a carga"/>
                <InputText label="Repetições" placeholder="Digite a quantidade de repetições" marginRight="62%"/>
                <InputText label="Séries" placeholder="Digite a quantidade de séries"/>
            </VStack>
            <VStack mt={5}>
                <CustomButtom color="green.500" title="Cadastrar exercício" onPress={()=>navigation.navigate('Treinos')}/>
            </VStack>
        </VStack>
    )
}