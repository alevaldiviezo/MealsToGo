import React from "react";
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import {Spacer} from '../../../components/spacer/spacer.component';

const SafeArea = styled(SafeAreaView)`
flex:1px;
margin-top:${StatusBar.currentHeight}px;
`;
// ${StatusBar.currenHeight && `margin-top:${StatusBar.currentHeight}px`};


const SearchContainer = styled.View`
padding:${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
flex:1px;
padding: ${(props) => props.theme.space[3]};

`;
// backgroundColor:${(props) => props.theme.colors.bg.primary};

export const RestaurantScreen = () => {
    return(
        // <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <SafeArea>
            
            <SearchContainer>
                <Searchbar/>
            
            </SearchContainer>
        
            <FlatList
            data={[{name:1}, {name:2}, {name:3}, {name:4}, {name:5}, {name:6}]}
            renderItem={() => 
            <Spacer position='bottom' size='large'>
            <RestaurantInfoCard/>
            </Spacer>
            }
            keyExtractor={(item) => item.name}
            contentContainerStyle={{padding:16}}
            />
            
            
        
        </SafeArea>
    );
    
}

// const styles = StyleSheet.create({
//     container: {
//       padding: 16, 
//       backgroundColor:'green'
      
//     },
//     search:{
//         padding:16
//     },
//     list:{
//       flex:1, 
//       padding: 16, 
//       backgroundColor:'blue'
//     }
//   });