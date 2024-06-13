import React from 'react'
import accountImg from '../../Assets/Images/selectAcc'
export default function Account() {
  return<>
  <div className="container ">
<p className='text-center fs-1'>Select Account..</p>
<div className="selectAccounts">
    <div className="account">
        <div className="select">
            <img src={accountImg} alt="" />
        </div>
    </div>
</div>
  </div>
  </>
}
