import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InternetImage from './screens/InternetImage';
import LocalImage from './screens/LocalImage';
import IconsScreen from './screens/IconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Internet" component={InternetImage} options={{ title: 'Imagem da Internet' }} />
        <Stack.Screen name="Local" component={LocalImage} options={{ title: 'Imagem Local' }} />
        <Stack.Screen name="Icones" component={IconsScreen} options={{ title: 'Galeria de Ícones' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
