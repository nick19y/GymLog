import { Text, VStack } from "native-base";
import { InputText } from "../components/InputText";
import { CustomButtom } from "../components/CustomButton";
import { Logo } from "../components/Logo";
import { Title } from "../components/Title";

export default function Login({navigation}:any){
    return(
        <VStack pt={40}>
            <Logo/>
            <Title text="GymLog"/>
            <VStack my={10}>
                <InputText label="Email" placeholder="Insira o seu email "/>
                <InputText secureTextEntry={true} label="Senha" placeholder="Insira a sua senha"/>
            </VStack>
            <CustomButtom title="Entrar" color="green.500" onPress={()=>navigation.navigate("BottomTabs")}/>
            <VStack mt={5}>
                <CustomButtom title="Criar conta" color="gray.500" onPress={()=>navigation.navigate("CreateAccount")}/>
            </VStack>
        </VStack>
    )
}