import qrisIcon from '../assets/img/payments/qris.svg'
import BCAIcon from '../assets/img/payments/qris/bca.svg'
import MandiriIcon from '../assets/img/payments/qris/mandiri.svg'
import BNIIcon from '../assets/img/payments/qris/bni.svg'
import PermataIcon from '../assets/img/payments/qris/permata.svg'
import SinarmasIcon from '../assets/img/payments/qris/sinarmas.svg'
import OVOIcon from '../assets/img/payments/qris/ovo.svg'

// Banner
import BCABg from '../assets/img/payments/banner/bca.svg'
import BNIBg from '../assets/img/payments/banner/bni.svg'
import MandiriBg from '../assets/img/payments/banner/mandiri.svg'
import PermataBg from '../assets/img/payments/banner/permata.svg'
import SinarmasBg from '../assets/img/payments/banner/sinarmas.svg'
import VisaBg from '../assets/img/payments/banner/visa.svg'
import MastercardBg from '../assets/img/payments/banner/mastercard.svg'
import PaypalBg from '../assets/img/payments/banner/paypal.svg'
import ccBg from '../assets/img/payments/banner/creditcard.svg'


export const methods = [
    // { type: "BCA", value: "QRIS_BCA", icon: BCAIcon, banner: BCABg },
    // { type: "Mandiri", value: "QRIS_MANDIRI", icon: MandiriIcon, banner: MandiriBg },
    // { type: "BNI", value: "QRIS_BNI", icon: BNIIcon, banner: BNIBg },
    // { type: "Permata", value: "QRIS_PERMATA", icon: PermataIcon, banner: PermataBg },
    // { type: "Sinarmas", value: "QRIS_SINARMAS", icon: SinarmasIcon, banner: SinarmasBg },
    // { type: "OVO", value: "QRIS_OVO", icon: OVOIcon, banner: BCABg },
    // { type: "VISA", value: "VISA", icon: OVOIcon, banner: VisaBg },
    // { type: "Mastercard", value: "MASTERCARD", icon: OVOIcon, banner: MastercardBg },
    { type: "Paypal", value: "PAYPAL", icon: OVOIcon, banner: PaypalBg },
    { type: "Credit Card", value: "CREDITCARD", icon: OVOIcon, banner: ccBg }

]

export const getPaymentName = (value) => {
    const found = methods.find(el => el.value === value)
    if (found) {
        return found.type
    } else {
        return ""
    }
}

export const getPaymentIcon = (method) => {
    const found = methods.find(el => el.value === method)
    if (found) {
        return found.icon
    } else {
        return qrisIcon
    }
}

export const getPaymentBanner = (method) => {
    const found = methods.find(el => el.value === method)
    if (found) {
        return found.banner
    } else {
        return BCABg
    }
}

