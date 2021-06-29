const initialState = {
    foto: "",
    email: "",
    telefon: "",
    namaLengkap: "",
    username: "",
    langganan: "",
    timezone: "",
    bahasa: "",


    pin:"",
    googlefa: false,

    negaraIP: "",
    kotaIP: "",
    ip: "",
    lastOnline: "",

    isPartner: false


};

const profileEmergencyReducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_PIN":
            return {
                ...state,
                pin: data
            }
        case "CLEAN_PROFILE": 
            return {
                foto: "",
                email: "",
                telefon: "",
                namaLengkap: "",
                username: "",
            
            
                pin:"",
                googlefa: false,
                passed2fa: false,
            
                negaraIP: "",
                kotaIP: "",
                ip: "",
                lastOnline: "",
                
            }
        case "SET_FOTO": 
            return {
                ...state,
                foto: data
            }
        case "SET_LASTLOC": 
            return {
                ...state,
                negaraIP: "",
                kotaIP: "",
                ip: "",
                lastOnline: "",
            }

        case "CHANGE_PHONE":
            return {
                ...state,
                telefon: data
            }
        case "SET_README":
            return {
                ...state,
                pin: data.nomor_pin,
                namaLengkap: data.full_name,
                username: data.username,
                email: data.email,
                telefon: data.noTlp,
                googlefa: data.active2fa,
                passed2fa: data.passed2fa,
                foto: data.avatar,
                langganan: data.langganan,
                bahasa: data.bahasa,
                timezone: data.timezone,
                isPartner: data.isPartner
            }
        default : 
            return state;
    }
})

export default profileEmergencyReducer;