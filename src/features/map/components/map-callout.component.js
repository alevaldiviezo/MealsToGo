import React from "react";
import styled from "styled-components";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;
export const MapCallOut = ({restaurant}) => (
    <CompactRestaurantInfo isMap restaurant={restaurant}/>

)