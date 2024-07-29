import { FormControl, Input, VStack } from "native-base";
import { InputText } from "../components/InputText";
import { Logo } from "../components/Logo";
import { Title } from "../components/Title";
import { CustomButtom } from "../components/CustomButton";

export default function CreateAccount({navigation}:any){
    return(
        <VStack>
            <VStack mt={10} mb={5}>
                <Logo/>
                <Title text="Criar conta"/>
            </VStack>
            <InputText placeholder="Digite o seu nome" label="Nome"/>
            <InputText placeholder="Digite o seu email" label="Email"/>
            <InputText placeholder="Digite a sua senha" label="Senha" secureTextEntry={true}/>
            <VStack alignItems={"center"} mb={5}>
            <FormControl.Label marginRight={"60%"}>Nascimento</FormControl.Label>
                <Input
                placeholder="Digite a sua data de nascimento"
                size="lg"
                width={"80%"}
                shadow={0.5}
                />
            </VStack>
            <CustomButtom title="Cadastrar" color="green.500" onPress={()=>navigation.replace('Login')}/>
        </VStack>
    )
}