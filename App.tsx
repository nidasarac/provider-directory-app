import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProviderList from './src/screens/ProviderList';
import Filter from './src/screens/Filter';
import ProviderDetail from './src/screens/ProviderDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProviderList">
        <Stack.Screen
          name="ProviderList"
          component={ProviderList}
          options={{ title: 'Sağlayıcılar', headerBackVisible: false, }}
        />

        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{ title: 'Filtreler' }}
        />

        <Stack.Screen
          name="ProviderDetail"
          component={ProviderDetail}
          options={{ title: 'Sağlayıcı Detayı' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}