
import 'bootstrap/dist/css/bootstrap.min.css';

const itemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <h1>{greeting}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemListContainer;