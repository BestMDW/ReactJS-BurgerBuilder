import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_DATA.START: return fetchDataStart(state, action);
        case actionTypes.FETCH_DATA.SUCCESS: return fetchDataSuccess(state, action);
        case actionTypes.FETCH_DATA.FAIL: return fetchDataFail(state, action);
        default: return state;
    }
};

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.id});
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const fetchDataStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchDataSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};

const fetchDataFail = (state, action) => {
    return updateObject(state, {loading: false});
};

export default reducer;