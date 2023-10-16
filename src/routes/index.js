
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword,{ } from "../pages/RecuperarSenha/index";
import Welcome, {} from "../pages/Welcome/index";
import SignIn, {} from "../pages/SignIn/index";
import SignOn, {} from "../pages/Cadastro/index";

import Inicio from "../pages/Conteudos/index.js";
const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="Cadastro"
            component={SignOn}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="Re-Senha"
            component={ForgotPassword}
            options={{headerShown:false}}
            />

        <Stack.Screen
            name="Conteudo"
            component={Inicio}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
    
}