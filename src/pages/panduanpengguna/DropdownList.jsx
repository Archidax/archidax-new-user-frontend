import React from 'react'

function DropdownListPanduan({className}) {
    const Panduan = [
        {title: "What is Crypto ?", id: "memahami-crypto", href: "#memahami-cypto"},
        {title: "Benefits of Cryptocurrency", id: "keuntungan-atau-benefit-crypto-list", href: "#keuntungan-atau-benefit-crypto"},
        {title: "Let's Get Started", id: "mari-memulai-list", href: "#mari-memulai"},
        {title: "Things That Must Be Prepared Before Trading", id: "persiapan-trading-list", href: "#persiapan-trading"},
        {title: "Activating Google Authenticator", id: "mengaktifkan-google-auth-list", href: "#mengaktifkan-google-auth"},
        // {title: "Deposit dan Penarikan Rupiah", id: "cara-deposit-dan-penarikan-list", href: "#cara-deposit-dan-penarikano"},
        // {title: "Deposit dan Penarikan Kripto", id: "cara-deposit-dan-penarikan-kripto-list", href: "#cara-deposit-dan-penarikan-kripto"},
        {title: "Metode Instan dan Metode Limit", id: "metode-instan-limit-list", href: "#metode-instan-limit"}
    ]

    const [title, setTitle] = React.useState({title: ""})

    return (
        <div className={`col-12 col-md-4 mb-4 ${className}`}>
            <div className={`dropdown ci-dropdown font-12`}>
                <button 
                    className="ci-dropdown-btn d-flex justify-content-between align-items-center ci-md w-100 py-2" type="button" id="dropdownRiwayatTarikCrypto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{overflow: "hidden"}}
                >
                    {title.title ? title.title : "Pilih Panduan"}
                    <i class="fas fa-sort-down"></i>
                </button>
                <div className="ci-dropdown-menu dropdown-menu w-100 py-0" aria-labelledby="dropdownRiwayatTarikCrypto">
                    <div className="list-group" id="list-tab" role="tablist" style={{height: "240px", overflowY: "auto"}}>
                        {Panduan && Panduan.map(option => {
                            return(
                                <a className={`list-group-item list-group-item-action ci-list-panduan`} id={option.id} data-toggle="list" href={option.href} role="tab" onClick={() => {
                                    setTitle({title: option.title})
                                }}>
                                    {option.title}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownListPanduan
