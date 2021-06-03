import React from "react";
import { Link } from "react-router-dom";
import Translate from "../../../i18n/Translate";
import moment from "moment";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { beritaRecent } from "../../../stores/berita/functions";
import Slider from "react-slick";

export default function NewsHomepage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    beritaRecent(dispatch);
  }, [dispatch]);

  const dataNewNews = useSelector((state) => state.beritaReducer.Recent);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-homepage">
      <div className="container-homepage mt-5 pb-5">
        <h5 className="text-homepage-yellow font-24">{Translate("hberita")}</h5>
        {/* <p className="text-white font-14 mb-0 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
        <p className="text-white font-14 mb-0">
          Nostrum ad laudantium voluptates delectus molestiae.
        </p> */}

        {/* <div className="pt-3 card-homepage-news"> */}
        <Slider {...settings}>
          {dataNewNews?.map((item, index) => {
            let Category;

            if (item.category === "Berita") {
              Category = (
                <div
                  className="categoryCardsHomepage-title w-100 ci-bg-success"
                  style={{ padding: "2px 0", borderRadius: "4px" }}
                >
                  <p className="mb-0 font-11 font-weight-bold text-white text-center">
                    {item.category}
                  </p>
                </div>
              );
            } else if (item.category === "Pengumuman") {
              Category = (
                <div
                  className="categoryCardsHomepage-title w-100 ci-bg-info"
                  style={{ padding: "2px 0", borderRadius: "4px" }}
                >
                  <p className="mb-0 font-11 font-weight-bold text-white text-center">
                    {item.category}
                  </p>
                </div>
              );
            } else if (item.category === "Artikel") {
              Category = (
                <div
                  className="categoryCardsHomepage-title w-100 ci-bg-warning"
                  style={{ padding: "2px 0", borderRadius: "4px" }}
                >
                  <p className="mb-0 font-11 font-weight-bold text-dark text-center">
                    {item.category}
                  </p>
                </div>
              );
            }

            return (
              <div className="px-2">
                <Link to={`/berita/${item.slug}`} className="mt-1 mb-1 h-100">
                  <div
                    className="card h-100 ci-customCard-1"
                    style={{ overflow: "hidden", borderRadius: "8px" }}
                  >
                    <img
                      src={item.img_news}
                      alt="img_news"
                      style={{
                        width: "100%",
                        overflow: "hidden",
                        height: "150px",
                      }}
                    />
                    <div className="card-body">
                      <div className="row align-items-center mb-2">
                        <div className="col-6">{Category}</div>
                        <div className="col-6 text-right">
                          <span className="text-gray2 mr-2 font-14">
                            {item.visits}
                          </span>
                          <i className="far fa-eye text-gray2 font-14"></i>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h5
                            className="font-15 text-gold"
                            style={{ minHeight: "80px" }}
                          >
                            {item.title}
                          </h5>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col-12 font-14 text-justify mt-2 text-homepage-p"
                          style={{ minHeight: "140px" }}
                        >
                          {item.description
                            .replace(/(<([^>]+)>)/gi, "")
                            .split(" ")
                            .filter((item, index) => index < 22)
                            .join(" ") + "..."}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-12">
                          <p className="text-right mb-0 font-11">
                            {moment(item.createdAt).format(
                              "DD MMMM YYYY, h:mm:ss A",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
        {/* </div> */}

        <div className="row justify-content-end mt-3">
          <div className="col-12 col-md-3">
            <Link to={`/berita`}>
              <button className="ci-btn-warning w-100 py-1">
                Lihat Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
