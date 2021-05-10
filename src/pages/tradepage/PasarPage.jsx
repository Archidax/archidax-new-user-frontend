import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BannerPasar from "../../components/tradeComponents/bannerPasar/BannerPasar";
import MainPageTrade from "../../components/tradeComponents/MainPageTrade";

export default function PasarPage() {
  // const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_SEARCH_CRYPTO",
      //data: search
    });
  }, [
    //search,
    dispatch,
  ]);

  return (
    <div className="mt-3" style={{ minHeight: "87vh" }}>
      <div className="mx-2">
        <BannerPasar />
      </div>
      <div className="card-body ">
        {/* <div className="">
        <div>
          <h5 className="mb-1 text-white">Pasar Trading</h5>
        </div>
      </div> */}

        <div className="ci-bg-primary px-2">
          <MainPageTrade />
        </div>
      </div>
    </div>
  );
}
