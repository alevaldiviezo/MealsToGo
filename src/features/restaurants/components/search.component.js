import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Searchbar } from "react-native-paper";

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
padding:${(props) => props.theme.space[3]};
padding-top:0px;
`;



export const Search = () => {

    
    
    const {keyword, search} = React.useContext(LocationContext);
    const [searchKeyword,setSearchKeyword] = useState(keyword)
    return(
    <SearchContainer>
        <Searchbar
        placeholder='Search for a location'
        value={searchKeyword}
        onSubmitEditing={() =>{
            search(searchKeyword)
        }}
        onChangeText={(text) => {
            
            setSearchKeyword(text)}}
        />            
    </SearchContainer>
    )}