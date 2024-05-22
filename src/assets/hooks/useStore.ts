import { Action, FromLanguage, Language, State } from "../../types"
import { useReducer } from 'react'

const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
}

function reducer (state: State, action: Action){
    const { type } = action

    if (type === 'INTERCHANGE_LANGUAGES') {
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if(type === 'SET_FROM_LANGUAGE') {
        return {
            ...state,
            fromLanguage: action.payload
        }
    }
    if (type === 'SET_TO_LANGUAGE') {
        return {
            ...state,
            toLanguage: action.payload
        }
    }

    if (type === 'SET_FROM_TEXT') {
        return {
            ...state,
            loading: true,
            fromTeaxt: action.payload,
            result: ''
        }
    }

    if (type  === 'SET_RESULT') {
        return {
            ...state,
            loadind: false,
            result: action.payload
        }
    }
}

export function useStore () {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    const insterchangeLaguages = () => {
        dispatch ({ type: 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload})
    }

    const setToLanguage = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload})
    }

    const setFromText = (payload: string) => {
        dispatch({ types: 'SET_FROM_TESXT', payload})
    }

    const setResult = (payload: string) => {
        dispatch({ type: 'SET_RESULT', payload})
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        insterchangeLaguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}
