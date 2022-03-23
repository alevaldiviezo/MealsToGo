import React, {useContext} from "react";
import { FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import {Spacer} from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area-component';

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
padding:${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;



export const RestaurantScreen = () => {

    const {isloading, error, restaurants} = useContext(RestaurantContext);

    return(
        
        <SafeArea>
            
            <SearchContainer>
                <Searchbar/>
            
            </SearchContainer>
        
            <RestaurantList
            data={restaurants}
            renderItem={({item}) => {
                console.log(item);
                return(
                    <Spacer position='bottom' size='large'>
                    <RestaurantInfoCard restaurant={item}/>
                    </Spacer>
                )
            }
            
            } 
            keyExtractor={(item) => item.name}
            
            />
            
            
        
        </SafeArea>
    );
    
}

