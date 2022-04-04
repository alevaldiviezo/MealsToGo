import React, {useContext} from "react";
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import {Spacer} from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area-component';

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { isLoading } from "expo-font";
import {Search} from '../components/search.component';



const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`;

const LoadingContainer = styled.View`
position: absolute;
top: 50%;
left:50%;
`;

export const RestaurantsScreen = ({navigation}) => {

    const {isLoading, error, restaurants} = useContext(RestaurantContext);
    return(
        
        <SafeArea>
           {isLoading && (
               <LoadingContainer>
                   <Loading size={50} animating={true} color={Colors.blue300}/>
               </LoadingContainer>
           )} 
           <Search/>
            
        
            <RestaurantList
            data={restaurants}
            renderItem={({item}) => {
                // console.log(item);
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail',{
                        restaurant: item,
                    })}>
                        <Spacer position='bottom' size='large'>
                        <RestaurantInfoCard restaurant={item}/>
                        </Spacer>
                    </TouchableOpacity>
                    
                )
            }
            
            } 
            keyExtractor={(item) => item.name}
            
            />
            
            
        
        </SafeArea>
    );
    
}
