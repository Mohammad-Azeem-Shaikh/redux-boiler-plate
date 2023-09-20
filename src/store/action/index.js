// import firebase from "../../config/firebase"


const set_data = (data) => {
    return (dispatch) => {
        console.log('running')
        dispatch({type: "SETDATA", data: data})
    }
}

const facebook_login = () => {
    
    return (dispatch) => {
        console.log("facebook")    
    }   
}

export {
    set_data,
    facebook_login
}