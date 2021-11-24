import React from 'react';
export default function Cart(props) {
  const [addedCakes, setAddedCakes] = useState({
    
  });
  return (
    <div className="container">
      <table className="table table-borderless table-hover">
        <thead class="table-dark">
          <tr>
            <td>Cake</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {props.cakeDetails.map((cake, index) => {
            return (
              <tr>
                <td>
                  <img src={cake.src} />
                </td>
                <td></td>
                <td>100</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
