import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

Card.propTypes = {
  item: {},
};

function Card({ item }) {
  return (
    <div className="col" style={{padding:"20px",background:"royalblue"}}>
       <div className="card mb-4 rounded-3 shadow-sm">
        <div
          className="text-center  py-3">
          <h4 className="my-0 fw-normal  text-black-50" style={{textAlign:"center", fontSize:"17px"}} >{item.planName}</h4>
        </div>
        <div className="card-body" >
          <h1 className="card-title pricing-card-title" style={{textAlign:"center"}}>
            ${item.price}
            <small className="text-body-secondary"><span class="fw-bolder"></span><span class="fw-bolder text-dark">/month</span></small>

          </h1>
          <div><hr></hr></div>  
          <ul className="list-unstyled mt-3 mb-4" style={{padding:"10px", lineHeight:"35px"}}>
            {item.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enabled ? (
                    <span>
                      <TiTick />
                      {feature.name}
                    </span>
                  ) : (
                    <>
                      <ImCross size={9} />
                      <span className="text-black-50"> {feature.name}</span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg ${
              item.buttonFocus ? "btn btn-primary btn-lg active" : "btn btn-lg btn-primary"
            }`}
          >
            Button 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;