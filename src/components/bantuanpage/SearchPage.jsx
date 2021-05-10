import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { baseAxios } from "../../stores";

function SearchPage() {
  const { cari } = useParams();
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (cari) {
      setLoading(true);
      baseAxios({
        url: "/faq/topic/search",
        params: {
          search: cari,
          language: "IDN",
        },
      })
        .then(({ data }) => {
          setSearchResult(data.search);
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [cari]);

  const results = [
    {
      title: "Ketentuan dan Persyaratan Cryptoindex.id",
      content:
        "Tentu saja. Kami memiliki aplikasi trading khusus untuk membantu Anda mengakses akun Anda, membuat order jual beli serta memantau pergerakan pasar digital asset dimanapun dan kapanpun Anda mau dari handphone Anda. Panduan …",
    },
    {
      title: "Ketentuan dan Persyaratan Cryptoindex.id",
      content:
        "Tentu saja. Kami memiliki aplikasi trading khusus untuk membantu Anda mengakses akun Anda, membuat order jual beli serta memantau pergerakan pasar digital asset dimanapun dan kapanpun Anda mau dari handphone Anda. Panduan …",
    },
    {
      title: "Ketentuan dan Persyaratan Cryptoindex.id",
      content:
        "Tentu saja. Kami memiliki aplikasi trading khusus untuk membantu Anda mengakses akun Anda, membuat order jual beli serta memantau pergerakan pasar digital asset dimanapun dan kapanpun Anda mau dari handphone Anda. Panduan …",
    },
    // {title:"Ketentuan dan Persyaratan Cryptoindex.id", content:"Tentu saja. Kami memiliki aplikasi trading khusus untuk membantu Anda mengakses akun Anda, membuat order jual beli serta memantau pergerakan pasar digital asset dimanapun dan kapanpun Anda mau dari handphone Anda. Panduan …"},
    // {title:"Ketentuan dan Persyaratan Cryptoindex.id", content:"Tentu saja. Kami memiliki aplikasi trading khusus untuk membantu Anda mengakses akun Anda, membuat order jual beli serta memantau pergerakan pasar digital asset dimanapun dan kapanpun Anda mau dari handphone Anda. Panduan …"},
  ];

  const categories = [
    "Tentang Aset Kripto",
    "Akun Cryptoindex",
    "Keamanan",
    "Verifikasi Akun",
    "Setor dan Tarik Dana",
  ];

  return (
    <div className="container-fluid searchPage">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="searchPage_head">
            <h5>Hasil Pencarian:</h5>
            <p>{cari}</p>
          </div>
          {loading ? (
            <div
              className="spinner-border spinner-border-grow spinner-border-sm text-warning mr-2"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : searchResult.length ? (
            searchResult.map((item, index) => {
              return (
                <div className="searchPage_results" key={index}>
                  <h5 className="font-16">{item.topics.title}</h5>
                  <p className="font-12">
                    {item.topics.content
                      .replace(/(<([^>]+)>)/gi, "")
                      .substring(0, 100)}
                  </p>
                  <Link
                    to={`/bantuan/${item.categorySlug}/${item.topics.topicSlug}`}
                  >
                    <h6 className="font-12">
                      Selengkapnya<i className="fas fa-chevron-right mx-2"></i>
                    </h6>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="searchPage_results">
              <h5 className="font-16">No Result</h5>
            </div>
          )}
        </div>
        <div className="col-12 col-md-5">
          <h5 className="artikel-bantuan-column-title ci-text-white">
            Kategori Lainnya
          </h5>
          {categories.map((item, index) => {
            return (
              <div key={index}>
                <Link to="">
                  <h6 className="artikel-bantuan-title kategori-lain ci-text-white font-12">
                    {item}
                  </h6>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="container-fluid py-2"
        style={{ borderTop: "0.3px solid #AEB4CE" }}
      >
        <p className="ci-text-white font-12">
          Punya pertanyaan lain?
          <Link to="/bantuan/hubungi-kami">
            <span className="link-hubungi-kami">Hubungi Kami</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SearchPage;
