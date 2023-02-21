function Random({min, max}) {

    return (
      <div>
        <p>Random value between {min} and {max} {'=>'} {String(min + Math.round(Math.random() * (max - min)))}</p>
      </div>
    );
  }
  
  export default Random;