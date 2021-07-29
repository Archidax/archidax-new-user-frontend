import React, { useEffect, useState } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "../footerComponents/footerHomePage/FooterHomePage";
import RouteBantuan from "./routeBantuan";
import Suggestion from "./pencarian/suggestion";
import { baseAxios } from "../../stores";
import { useHistory } from "react-router-dom";
import CopyrightDashboard from "../footerComponents/copyrightComponents/CopyrightDashboard";
import Translate from "../../i18n/Translate";

export default function BantuanPage() {
  const history = useHistory();

  const [suggestionList, setSuggestionList] = useState([]);
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestionState, setSuggestionState] = useState({
    activeSuggestion: -1,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });

  const onInputChange = (e) => {
    setLoadingSuggestion(true);
    setSearchInput(e.target.value);
    if (e.target.value.length > 3) {
      baseAxios({
        url: "/faq/topic/search",
        params: {
          search: e.target.value,
          language: "IDN",
        },
      })
        .then(({ data }) => {
          setSuggestionList(data.search);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setSuggestionList([]);
    }
  };

  const onInputKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === 13) {
      setSearchInput((prevSet) => {
        if (
          suggestionState.activeSuggestion >= 0 &&
          suggestionState.activeSuggestion < suggestionList.length
        ) {
          history.push(
            `/bantuan/pencarian/${
              suggestionList[suggestionState.activeSuggestion].topics.title
            }`,
          );
          return suggestionList[suggestionState.activeSuggestion].topics.title;
        } else {
          history.push(`/bantuan/pencarian/${searchInput}`);
          return searchInput;
        }
        // setSuggestionList([])
      });
    } else if (keyCode === 38) {
      if (suggestionState.activeSuggestion >= 0) {
        setSuggestionState({
          ...suggestionState,
          activeSuggestion: suggestionState.activeSuggestion - 1,
        });
      }
    } else if (keyCode === 40) {
      if (suggestionState.activeSuggestion < suggestionList.length) {
        setSuggestionState({
          ...suggestionState,
          activeSuggestion: suggestionState.activeSuggestion + 1,
        });
      }
    }
  };

  const onSuggestionClick = (e) => {
    // console.log(e.target.innerText)
    // setSearchInput(e.target.innerText)
    setSuggestionState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.target.innerText,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSuggestionList([]);
    // setSearchInput((prevSet) => {
    //   history.push(`/bantuan/pencarian/${searchInput}`)
    //   return ''
    // })
  };

  useEffect(() => {
    setSuggestionState({
      userInput: searchInput,
      activeSuggestion: -1,
      filteredSuggestions: suggestionList, // .filter(suggestion => suggestion.toLowerCase().indexOf(searchInput.toLowerCase()) > -1),
      showSuggestions: true,
    });
    setLoadingSuggestion(false);
  }, [suggestionList]);

  return (
    <div>
      <div className="bantuan" >
        <Jumbotron className="banner-bantuan">
          <Container>
            <h1 className="title-banner-bantuan ci-text-white font-32">
              {Translate('bn_butuh_bantuan')}
            </h1>
            <p className="title-banner-p ci-text-white font-16">
              {Translate('bn_text_banner')}
            </p>
            <div className="row mt-4 justify-content-center no-gutters">
              <div className="col-8 col-md-8">
                <form
                  onSubmit={(e) => submitForm(e)}
                  className="input-group ci-inputDefault-bg"
                >
                  <input
                    value={searchInput}
                    onChange={(e) => onInputChange(e)}
                    onKeyDown={(e) => onInputKeyDown(e)}
                    placeholder="Pencarian"
                    type={"text"}
                    className="form-control ci-inputDefault-bg-input ci-pd"
                  />
                  <div className="ci-inputDefault-bg-appendR">
                    <i
                      className={
                        "fas fa-search ci-inputDefault-bg-appendR-icon ci-text-white"
                      }
                    ></i>
                  </div>
                </form>
                <Suggestion
                  {...suggestionState}
                  setSearchInput={setSearchInput}
                  loadingSuggestion={loadingSuggestion}
                  onSuggestionClick={onSuggestionClick}
                />
              </div>
            </div>
          </Container>
        </Jumbotron>
        <RouteBantuan />
      </div>

      {/* <div className="col-12 p-0 mt-4">
        <CopyrightDashboard />
      </div> */}
    </div>
  );
}
