import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

import Popup from '../../components/popUps'
import arrow from "../../assets/img/arrow-next.png";
import { baseAxios } from "../../stores";
import { parseFixedNumber } from '../../helpers/functions'
import Translate from "../../i18n/Translate";

export default function Listbantuan() {
  const [categories, setCategories] = useState([]);
 
  const [popularTopics, setPopularTopics] = useState([]);

  // const [popularTopics, setPopularTopics] = useState([]);
  const [newTopics, setNewTopics] = useState([]);

  let categoryStripper = (slug) => {
    let cat = slug;
    cat = cat.split("-");
    cat.pop();
    cat = cat.join(" ");
    return cat;
  };

  let getPopularCategories = (language) => {
    return baseAxios.get(`/faq/category/popular?language=${language}`);
  };

  let getPopularTopics = (language) => {
    return baseAxios.get(`/faq/topic/popular?language=${language}`);
  };

  let getNewTopics = (language) => {
    return baseAxios.get(`/faq/topic/new?language=${language}`);
  };

  const retry = useCallback((retries) => {
    setTimeout(() => {
      if (retries - 1 > 0) {
        promiseCombiner(retries - 1);
      } else {
        Popup.fire({
          title: 'Tidak dapat menghubungi server',
          text: 'Mohon periksa kembali koneksi internet anda',
        })
      }
    }, 1000);
  })

  let promiseCombiner = (retries = 3) => {
    Promise.all([
      getPopularCategories("IDN"),
      getPopularTopics("IDN"),
      getNewTopics("IDN"),
    ])
      .then((result) => {
        setCategories(result[0].data.categories);
        setPopularTopics(result[1].data.search);
        setNewTopics(result[2].data.search);
        // swal.close()
        Popup.close()
      })
      .catch((err) => {
        retry(retries)
      });
  };

  useEffect(() => {
    Popup.showLoading()
    promiseCombiner();
  }, []);

  return (
    <div className="container list-bantuan">
      <div className="row">
        {categories.map((item, index) => {
          return (
            <div className="col col-md-4 mb-3" key={index}>
              <Link to={`bantuan/${item.categorySlug}`}>
                <div className="card ci-customCard-1">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <h6 className="my-1">{item.categoryName}</h6>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <hr className="my-5" style={{ borderColor: "#DDDDDD" }} />

      <div className="row">
        <div className="col-12 col-md-6">
          <h2
            className="ci-text-white font-16"
            style={{ letterSpacing: "2px" }}
          >
            {Translate('br_artikel_terbaru')}
          </h2>
          <div
            style={{ background: "#F9BA42", width: "25%", height: "2px" }}
            className="mb-3"
          ></div>
          {newTopics.map((item, index) => {
            return (
              <div key={index}>
                <div className="artikel-bantuan-keterangan">
                  <p className="ci-text-white font-10">Bantuan</p>
                  <img src={arrow} alt="arrow" />
                  <p className="ci-text-white font-10">
                    {categoryStripper(item.categorySlug)}
                  </p>
                </div>
                <Link
                  to={`/bantuan/${item.categorySlug}/${item.topics.topicSlug}`}
                >
                  <h2 className="artikel-bantuan-title ci-text-white font-12">
                    {item.topics.title}
                  </h2>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="col-12 col-md-6">
          <h2
            className="ci-text-white font-16"
            style={{ letterSpacing: "2px" }}
          >
            {Translate('bn_artikel_terpopuler')}
          </h2>
          <div
            style={{ background: "#F9BA42", width: "30%", height: "2px" }}
            className="mb-3"
          ></div>
          {popularTopics.map((item, index) => {
            // let strippedCategorySlug = item.categorySlug.split('-')
            // strippedCategorySlug.pop()
            // strippedCategorySlug = strippedCategorySlug.join('-')
            return (
              <div key={index}>
                <div className="artikel-bantuan-keterangan">
                  <p className="ci-text-white font-10">{Translate('bn_help')}</p>
                  <img src={arrow} alt="arrow" />
                  <p className="ci-text-white font-10">{item.categoryName}</p>
                </div>
                <Link
                  to={`bantuan/${item.categorySlug}/${item.topics.topicSlug}`}
                >
                  <h2 className="artikel-bantuan-title ci-text-white font-12">
                    {item.topics.title}
                  </h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="my-5" style={{ borderColor: "#DDDDDD" }} />

      <div style={{ marginBottom: "5vh" }}>
        <p className="ci-text-white font-12">
          {Translate('bn_punya_pertanyaan')}
          <Link to="/bantuan/hubungi-kami">
            <span className="link-hubungi-kami ml-2">{Translate('bn_hubungi_kami')}</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
