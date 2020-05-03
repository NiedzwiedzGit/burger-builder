import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingrediens) => {
    return {
        type: actionTypes.SET_INGREGIENTS,
        ingredients: ingrediens
    };
}

export const fetchIngredietsFaild = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-51237.firebaseio.com/ingredients.json')
            .then(responce => {
                dispatch(setIngredients(responce.data));
            })
            .catch(error => {
                dispatch(fetchIngredietsFaild());
            });
    }
};
