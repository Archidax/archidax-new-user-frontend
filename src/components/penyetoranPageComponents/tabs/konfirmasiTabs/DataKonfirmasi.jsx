import React from 'react'

function DataKonfirmasi({tanggal, jumlah, metode, jenis, norek, berita, pesan, bukti, status}) {
    return (
        <tr className="font-12">
            <td>{tanggal}</td>
            <td>{jumlah}</td>
            <td>{metode}</td>
            <td>{jenis}</td>
            <td>{norek}</td>
            <td>{berita}</td>
            <td>{pesan}</td>
            <td><a className="p-2 bg-info" href={bukti} target="_blank" rel="noreferrer">Lihat</a></td>
            <td className={status === "Pending" ? "text-warning" : status === "Sukses" ? "text-success" : "text-danger"}>{status}</td>
        </tr>
    )
}

export default DataKonfirmasi
