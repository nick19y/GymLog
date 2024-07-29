import { Center, FormControl, Input } from "native-base";

interface InputProps{
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
    value?: string;
    marginRight?: string;
    onChangeText?:(text:string)=>void;
}

export function InputText({label, placeholder, secureTextEntry, value, marginRight="70%", onChangeText}: InputProps){
    return(
        <FormControl display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"} mb={"4"}>
            <FormControl.Label marginRight={marginRight}>{label}</FormControl.Label>
            <Input
            placeholder={placeholder}
            size="lg"
            width={"80%"}
            secureTextEntry={secureTextEntry}
            shadow={0.5}
            value={value}
            onChangeText={onChangeText}
            />
        </FormControl>
    )
}