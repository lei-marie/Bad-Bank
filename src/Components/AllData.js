import React, {useContext} from 'react';
import {UserContext} from '../utils/context';

function AllData(){
  
    const ctx = useContext(UserContext);
    
    return (
      <div id="dataBack"> 
        <div className="card border-info mb-3" id="dataCard">
          <div className="card-header">User Data</div>
          <div className="card-body text-info">
            
            <table className="table">
              <thead>
                <tr key="label">
                  <th scope="colSpan" key="label-name">Name</th>
                  <th scope="colSpan" key="label-email">Email</th>
                  <th scope="colSpan" key="label-password">Password</th>
                  <th scope="colSpan" key="label-balance">Balance</th>
                </tr>
              </thead>
              <tbody>
                {ctx.users.map((user) => {
                  return ( 
                    <tr key="data">
                      <td key='data-name'>{user.name}</td>
                      <td key='data-email'>{user.email}</td>
                      <td key='data-password'>{user.password}</td>
                      <td key='data-balance'>{user.balance}</td>
                    </tr>
                    )
                  })}
              </tbody>
            </table>

            </div>
          </div>
      </div>
     )
  }

  export default AllData;

 
