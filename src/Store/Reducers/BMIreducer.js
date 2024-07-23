import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateUnit = createAction('UPDATE_UNIT');
const updateHeight = createAction('UPDATE_HEIGHT');
const updateWeight = createAction('UPDATE_WEIGHT');
const initialState = { unit: 'metric', height: '', weight: ''};

const BMIReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateUnit, (state, action) => {                            //the 'case'
      state.unit = action.unit;
    })
    .addCase(updateHeight, (state, action) => {
      state.height = action.height;                      
    })
    .addCase(updateWeight, (state, action) => {
      state.weight = action.weight;
    })
})

export default BMIReducer;