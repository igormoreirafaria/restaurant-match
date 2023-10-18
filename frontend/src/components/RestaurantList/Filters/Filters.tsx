import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Rating, Slider, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from 'react';
import { FilterParams, SetFiltersType } from "../../../shared/filters/FilterParams";
import { Column, Distance } from '../RestaurantItem/styles';
import { StyledContainer } from "./styles";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

interface Props {
    filters: FilterParams;
    setFilter: SetFiltersType;
    onSearch: () => void;
    clearFilters: () => void;
    nameError: boolean;
    setNameError: Dispatch<SetStateAction<boolean>>;
    cuisineError: boolean;
    setCuisineError: Dispatch<SetStateAction<boolean>>;
}

const Filters = ({
    filters,
    setFilter,
    onSearch,
    clearFilters,
    nameError,
    setNameError,
    cuisineError,
    setCuisineError,
}:Props): JSX.Element => {
    const [name, setName] = useState<string>('')
    const [ratingValue, setRatingValue] = useState<number | null>(null)
    const [distanceValue, setDistanceValue] = useState<number | number[]>(10)
    const [price, setPriceValue] = useState<number | number[]>(50)
    const [cuisine, setCuisine] = useState<string>('')
    

    const nameErrorText = 'Please input a restaurant name'
    const cuisineErrorText = 'Please input a cuisine'

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter.restaurantName(event.target.value);
        setName(event.target.value)
    }

    const onChangeRating = (event: React.SyntheticEvent<Element, Event>, value: number | null) => {
        setFilter.customerRating(value?.toString() !== undefined ? value.toString() : '')
        setRatingValue(value);
    }

    const onChangeDistance = (event: Event, value: number | number[], activeThumb: number) => {
        setFilter.distance(value.toString())
        setDistanceValue(value)
    }

    const onChangePrice = (event: Event, value: number | number[], activeThumb: number) => {
        setFilter.price(value.toString())
        setPriceValue(value)
    }

    const onChangeCuisine = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter.cuisine(event.target.value);
        setCuisine(event.target.value)
    }

    const onClearFilter = async () => {
        clearFilters();
        setName('')
        setCuisine('')
        setRatingValue(0)
        setPriceValue(50)
        setDistanceValue(10)
        setNameError(false)
        setCuisineError(false)        
    }
    

    return(
        <StyledContainer maxWidth='md'>
            <Column>
                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    value={name}
                    variant="outlined"
                    onChange={onChangeName}
                    error={nameError}
                    helperText={nameError ? nameErrorText : null}
                    />
                <TextField 
                    id="outlined-basic-1" 
                    value={cuisine}
                    label="Cuisine" 
                    variant="outlined"
                    onChange={onChangeCuisine}
                    error={cuisineError}
                    helperText={cuisineError ? cuisineErrorText : null}
                    />
            </Column>
            <Column>
                <div>
                    <Typography component="legend">Rating</Typography>
                    <Rating 
                        name="simple-controlled" 
                        value={ratingValue}
                        onChange={onChangeRating}
                    />
                </div>
                <Distance>
                    <Typography component="legend">Distance</Typography>
                    <Slider 
                        aria-label="Volume"
                        value={distanceValue}
                        onChange={onChangeDistance}
                        valueLabelDisplay="auto"
                        min={1}
                        max={10}
                        />
                </Distance>
            </Column>
            <Column>
                <Distance>
                    <Typography component="legend">Price</Typography>
                    <Slider
                        aria-label="Volume"
                        value={price}
                        onChange={onChangePrice}
                        valueLabelDisplay="auto"
                        min={1}
                        max={50}
                        />
                </Distance>
            </Column>
            <Column>
                <IconButton
                    aria-label="search"
                    onClick={onSearch}>
                    <SearchIcon fontSize='large' />
                </IconButton>
                <IconButton
                    aria-label="clear"
                    onClick={onClearFilter}>
                <CleaningServicesIcon fontSize='large' />
            </IconButton>
            </Column>
            
            
        </StyledContainer>
    )
}

export {
    Filters
};

