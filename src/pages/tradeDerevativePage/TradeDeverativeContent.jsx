import React from 'react'
import { useSelector } from 'react-redux';

// Import Components
import TraficTradeDerivative from './components/TraficTradeDerivative';
import MainContentTradeDerivative from './components/MainContentTradeDerivative';

function TradeDeverativeContent() {
    const { mode } = useSelector((state) => state.daynightReducer);
    const [showDropdown, setShowDropdown] = React.useState("d-none");
    const handleShowDropdown = (props) => {
      props === "d-none" ? setShowDropdown("d-block") : setShowDropdown("d-none");
    };

    return (
        <div className={`bodyTradeDerivative ${mode ? "body-trade2-dark" : "body-trade2"}`}>
            <div className="container-tradeDerivative">
                    
                <TraficTradeDerivative handleShowDropdown={handleShowDropdown} showDropdown={showDropdown} mode={mode} />

                <MainContentTradeDerivative />
                
            </div>
        </div>
    )
}

export default TradeDeverativeContent
