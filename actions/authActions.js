
export const AuthActions = (creds) => {
    console.log('AuthActions')
    return (dispatch,action,{getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then((response)=> {
            console.log('response')
            console.log(response)
            return dispatch({type:'LOGIN_SUCCESS',response})
        }).catch((err)=> {
            console.log('err')
            console.log(err)
            return dispatch({type:'LOGIN_ERROR',err})
        })

    }
}


export const signoutActions = () => {
    return (dispatch,action,{getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {return dispatch({type:'SIGNOUT_SUCCESS'})})
        .catch((err)=>  {return dispatch({type:'SIGNOUT_FAILURE',err})});
    }
}


export const signupActions = (user) => {
    return ((dispatch,action,{getFirebase,getFirestore})=> {
        const firebase = getFirebase();
        const fireStore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then((response) => {
            console.log('singup response');
            console.log(response);
            console.log(user.firstName,user.lastName);
            return fireStore.collection('users').doc(response.user.uid).set({
                firstName:user.firstName,
                lastName:user.lastName,
                initials:user.firstName[0] + user.lastName[0]
            })
        }).then(()=> {
            dispatch({type:'USER_CREATION_SUCCESS'})
        }).catch ((err) => {
            console.log(err)
            dispatch({type:'USER_CREATION_Failed',err});
        })
    })
}