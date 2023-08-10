import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import { Provider, useDispatch } from 'react-redux'
import { Store, configureStore } from '@reduxjs/toolkit'

// initialize types
const ADD_ARTICLE = "ADD_ARTICLE"
const REMOVE_ARTICLE = "REMOVE_ARTICLE"
const ACCIDENT_ARTICLE = "ACCIDENT_ARTICLE"
const CONGESTION_ARTICLE = "CONGESTION_ARTICLE"

export interface State {
  noOfAccidents: number,
  noOfCongestion: number,
  accidentListItems: AccidentItem[],
  congestionListItems: CongestionItem[]
}

export type AccidentItem = {
  type: string,
  index: number, 
  location: string, 
  time: string, 
  highways: Array<string>, 
  severity: string, 
  details: Array<string>
}

export type CongestionItem = {
  type: string,
  index: number, 
  location: string, 
  time: string, 
  highways: Array<string>, 
  severity: string, 
  details: Array<string>
}

export type ActionType = {
  type: string,
  article: AccidentItem | CongestionItem
}

export type DispatchType = (args: ActionType) => ActionType

// initial state
export const initialState: State = {
  noOfAccidents: 1,
  noOfCongestion: 1,
  accidentListItems: [],
  congestionListItems: []
}

export const reducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
    case ADD_ARTICLE:
      switch (action.article.type) {
        case ACCIDENT_ARTICLE:
          return {
            ...state,
            noOfAccidents: state.noOfAccidents + 1,
            accidentListItems: [
              ...state.accidentListItems,
              action.article
            ]
          }
        case CONGESTION_ARTICLE:
          return {
            ...state,
            noOfCongestion: state.noOfCongestion + 1,
            congestionListItems: [
              ...state.congestionListItems,
              action.article
            ]
          }
        default:
          return state
      }
    case REMOVE_ARTICLE:
      switch (action.article.type) {
        case ACCIDENT_ARTICLE:
          const updatedAccidentList = state.accidentListItems.filter(article => article.index != action.article.index)
          for (let i=0; i<updatedAccidentList.length; i++) {
            updatedAccidentList[i].index = i;
          }

          return {
            ...state,
            noOfAccidents: state.noOfAccidents - 1,
            accidentListItems: updatedAccidentList
          }
        case CONGESTION_ARTICLE:
          const updatedCongestionList = state.congestionListItems.filter(article => article.index != action.article.index)
          for (let i=0; i<updatedCongestionList.length; i++) {
            updatedCongestionList[i].index = i;
          }

          return {
            ...state,
            noOfAccidents: state.noOfAccidents - 1,
            accidentListItems: updatedCongestionList
          }
        default:
          return state
      }
    default:
      return state
  }
}

export const store: Store<State, ActionType> & {dispatch: DispatchType} = configureStore({reducer});

// actions
export function addArticle(article: AccidentItem | CongestionItem) {
  const action: ActionType = {
    type: ADD_ARTICLE,
    article,
  }
  return (dispatch: DispatchType) => {dispatch(action)}
}

export function removeArticle(article: AccidentItem | CongestionItem) {
  const action: ActionType = {
    type: REMOVE_ARTICLE,
    article,
  }
  return (dispatch: DispatchType) => {dispatch(action)}
}

// main
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
