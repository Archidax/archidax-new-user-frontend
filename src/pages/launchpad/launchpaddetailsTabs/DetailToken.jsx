import React from 'react'
import moment from 'moment'
import { convertNumber } from '../../../assets/js'
import { useSelector } from 'react-redux'

function DetailToken() {
    const data = useSelector(state => state.launchpadReducer.IEODetails)

    return (
        <div className="container-fluid">
            <div className="row no-gutters mb-2">
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Name</label>
                    <p className="text-white font-roboto font-16 mb-0">{data.asset_name}</p>
                </div>
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Website Project</label>
                    <p className="text-white font-roboto font-16 mb-0">{data.project_website}</p>
                </div>
            </div>
            <div className="row no-gutters mb-2">
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Waktu Mulai Penjualan Token</label>
                    <p className="text-white font-roboto font-16 mb-0">{moment(data.phase_details.start_sale_time).format('LLL')}</p>
                </div>
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Waktu Akhir Penjualan Token</label>
                    <p className="text-white font-roboto font-16 mb-0">{moment(data.phase_details.end_sale_time).format('LLL')}</p>
                </div>
            </div>
            <div className="row no-gutters mb-2">
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Pasokan Token</label>
                    <p className="text-white font-roboto font-16 mb-0">{convertNumber.toMoney(data.phase_details.amount)}</p>
                </div>
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Harga Token</label>
                    <p className="text-white font-roboto font-16 mb-0">{data.phase_details.token_price}</p>
                </div>
            </div>
            <div className="row no-gutters mb-2">
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Jumlah Pembelian Minimum</label>
                    <p className="text-white font-roboto font-16 mb-0">{data.phase_details.minimum_purchase_amount}</p>
                </div>
                <div className="col-12 col-md-6">
                    <label className="text-gold font-roboto font-14 mb-0">Protocol Token</label>
                    <p className="text-white font-roboto font-16 mb-0">{data.token_protocol}</p>
                </div>
            </div>
            <div className="row no-gutters mb-2">
                <div className="col-12 col-md-12">
                    <label className="text-gold font-roboto font-14 mb-0">Distribusi Token</label>
                    <p className="text-white font-roboto font-16 mb-0 text-justify">{data.token_distribution}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailToken
