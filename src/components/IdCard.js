function IdCard(props) {
  return (
    <div id="card">
        <img src={props.picture} alt="image1"/>
        <div>
            <p><span className="card-span">First Name: </span>{props.firstName}</p>
            <p><span className="card-span">Last Name: </span>{props.lastName}</p>
            <p><span className="card-span">Gender: </span>{props.gender}</p>
            <p><span className="card-span">Height: </span>{(props.height / 100).toFixed(2)}m</p>
            <p><span className="card-span">Birth: </span>{props.birth.toDateString()}</p>
        </div>
    </div>
  );
}

export default IdCard;