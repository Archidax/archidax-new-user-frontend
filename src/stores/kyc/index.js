const initialState = {
    kycStatus: "",
    isFinish: "",
    approved_status: false,
    namaKerabat: "",
    hubunganKerabat: "",
    nomorTelefonKerabat: "",

    alamat:"",
    provinsi: "",
    kota: "",
    kodePos: "",

    limit: "",

    requestId: "",

};

const profileEmergencyReducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_LIMIT": 
            return  {...state, limit: data}
        
        case "SET_OTP": 
            return  {...state, requestId: data}
        case "CHANGE_ADDRESS": 
            return {
                ...state,
                alamat: data.street,
                provinsi: data.provinces,
                kota: data.districtOrCity,
                kodePos: data.zipcode
            }
        case "CLEAN_KYC": 
            return {
                kycStatus: "",
                isFinish: "",
                approved_status: false,
                namaKerabat: "",
                hubunganKerabat: "",
                nomorTelefonKerabat: "",
            
                alamat:"",
                provinsi: "",
                kota: "",
                kodePos: "",
            
                limit: "",
            
                requestId: "",
            }
        case "CHANGE_EMERGENCY":
            return {
                ...state,
                namaKerabat: data.familyName,
                hubunganKerabat: data.familyRelation,
                nomorTelefonKerabat: data.familyNumber,
            }
        case "CHANGE_KYCV2":
            return {
                ...state,
                kycStatus: data.kycStatus,
                isFinish: data.isFinish,
                approved_status: data.approved_status,
            }
        case "SET_KYCSTATUS":
            return { 
                ...state, 
                kycStatus: data.step,
                isFinish: data.isFinish,
                approved_status: data.approved_status,
                namaKerabat: data.familyName,
                hubunganKerabat: data.familyRelation,
                nomorTelefonKerabat: data.familyNumber,
                alamat: data.street,
                provinsi: data.provinces,
                kota: data.districtOrCity,
                kodePos: data.zipcode
            };
        default : 
            return state;
    }
})

export default profileEmergencyReducer;