import React from 'react'

export function useLocalStorageState( key,
                                     defaultValue ='',
                                     {serialize= JSON.stringify,deserialize=JSON.parse} ={}){

    const [state,setState] = React.useState(() =>{
        const valueInLocalStoarage = window.localStorage.getItem(key)

        if(valueInLocalStoarage){
            return deserialize(valueInLocalStoarage)
        }

        return  typeof defaultValue === 'function' ? defaultValue() : defaultValue
    })

    const prevKeyRef = React.useRef(key)

    React.useEffect(() =>{
            const prevKey = prevKeyRef.current
        if(prevKey !== key){
            //delete the old value saved into local storage
            window.localStorage.removeItem(prevKey)
        }
        //update ref
        prevKeyRef.current = key
        window.localStorage.setItem(key, serialize(state))
    },[key, state, serialize])

    return [state, setState]
}
