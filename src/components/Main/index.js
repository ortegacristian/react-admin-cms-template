// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Componentes
import { TopBar } from '../TopBar';

export const Main = () => {
  // Obtenemos el estado del reducer Navigation
  const navigationState = useSelector((state) => state.navigation);

  // Miramos si tiene que mostrar o ocultar el menu de navegación
  const toggleActiveClass = (navigationState.toggleActive) ? ' active' : '';

  return (
    <div className={`main${toggleActiveClass}`}>
      <TopBar />
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">1,504</div>
            <div className="cardName">Daily Views</div>
          </div>
          <div className="iconBox">
            <ion-icon name="eye-outline" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">80</div>
            <div className="cardName">Sales</div>
          </div>
          <div className="iconBox">
            <ion-icon name="cart-outline" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">284</div>
            <div className="cardName">Comments</div>
          </div>
          <div className="iconBox">
            <ion-icon name="chatbubbles-outline" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">$7,842</div>
            <div className="cardName">Earning</div>
          </div>
          <div className="iconBox">
            <ion-icon name="cash-outline" />
          </div>
        </div>
      </div>

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Recent Orders</h2>
            <Link to="/" className="btn">View All</Link>
          </div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>Denim Shirts</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <span className="status inprogress">In Progress</span>
                </td>
              </tr>
              <tr>
                <td>Casual Shoes</td>
                <td>$575</td>
                <td>Paid</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$620</td>
                <td>Paid</td>
                <td>
                  <span className="status return">Return</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recentCustomers">
          <div className="cardHeader">
            <h2>Recent Customers</h2>
          </div>
          <table>
            <tr>
              <td width="60">
                <div className="imgBox">
                  <img src="./assets/person-icon.png" alt="customer" />
                </div>
              </td>
              <td>
                <h4>
                  Customer Name
                  <br />
                  <span>Country</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60">
                <div className="imgBox">
                  <img src="./assets/person-icon.png" alt="customer" />
                </div>
              </td>
              <td>
                <h4>
                  Customer Name
                  <br />
                  <span>Country</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60">
                <div className="imgBox">
                  <img src="./assets/person-icon.png" alt="customer" />
                </div>
              </td>
              <td>
                <h4>
                  Customer Name
                  <br />
                  <span>Country</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60">
                <div className="imgBox">
                  <img src="./assets/person-icon.png" alt="customer" />
                </div>
              </td>
              <td>
                <h4>
                  Cristian
                  <br />
                  <span>Spain</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60">
                <div className="imgBox">
                  <img src="./assets/person-icon.png" alt="customer" />
                </div>
              </td>
              <td>
                <h4>
                  Any Name
                  <br />
                  <span>Any Country</span>
                </h4>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
