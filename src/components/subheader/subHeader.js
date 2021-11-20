
import './subHeader.scss';

const SubHeader = ({tempMeasure, setTempMeasure}) => {

    return (
        <div className="subheader">
            <div onClick={() => setTempMeasure('celsius')} className={`celsius-btn${tempMeasure === 'celsius' ? ' active' : ''}`}>°C</div>
            <div onClick={() => setTempMeasure('fahrengeit')} className={`fahrengeit-btn${tempMeasure === 'fahrengeit' ? ' active' : ''}`}>°F</div>
        </div>
    )
}
export default SubHeader;