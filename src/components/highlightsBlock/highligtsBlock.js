
import './highlights.scss';

const HighlightsBlock = ({highlights}) => {

    

    console.log(highlights)
    return(
        <div className="highlights">
            <div className="highlights__header">Today's highlights</div>
            <div className="highlights__grid">
                <div className="highlights__grid-item">
                    <div className="label">Wind status</div>
                    <div className="content">
                        <div className="count">{highlights.wind.speed}<span> mph</span></div>
                        <div className="direction">
                            <i className="far fa-compass"></i>
                            {highlights.wind.direction}
                        </div>
                    </div>
                </div>
                <div className="highlights__grid-item">
                    <div className="label">Humidity</div>
                    <div className="content">
                        <div className="count">{highlights.humidity}<span> %</span></div>
                        <div className="bar_block">
                            <div className="limits">
                                <span>0</span><span>50</span><span>100</span>
                            </div>
                            <div className="bar">
                                <div style={{'width': `${highlights.humidity}%`}} className="bar-line"></div>
                            </div>
                            <div className="percent-symbol">%</div>
                        </div>
                    </div>
                </div>
                <div className="highlights__grid-item">
                    <div className="label">Visibility</div>
                    <div className="content">
                        <div className="count">{highlights.visibility}<span> miles</span></div>
                    </div>
                </div>
                <div className="highlights__grid-item">
                    <div className="label">Air pressure</div>
                    <div className="content">
                        <div className="count">{highlights.pressure}<span> mb</span></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default HighlightsBlock;