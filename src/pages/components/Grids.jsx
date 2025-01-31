
import "./Grids.css";
function Grids(){
    const divs = new Array(135).fill(1);
    return (
        <div className="grid-container"><div className="gradient-div"></div>{divs.map((_, index) => <div key={index} className="grid-item"></div>)}</div>
    )
}

export default Grids;