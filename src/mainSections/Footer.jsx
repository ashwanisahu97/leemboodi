import React from 'react'
import "../Styles/Footer/footer.scss"
import { footerInfoData } from '../Data/Footer/footerData'
const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className="footer-info-container">
        {
        [1,2,3].map((element, i) =>{
          return<div>
             {footerInfoData?.map((entity, i) =>{
              return <div style={{display:'flex',flexDirection:"column"}}>
                {
                 entity.map((item,i)=><div>{item}</div>)
                }
              </div>
             })}
          </div>
        })
      }
      </div>
      <div className="footer-right-info">
        <p>© 2024, Leemboodi. All rights reserved.</p>
      </div>
      <div className="footer-bottom-last">
        <p>Leemboodi Rewards</p>
        <div className='popcoins-container'>
          <img src="https://ecomapp-dev-v2.s3.ap-south-1.amazonaws.com/Coin.png" alt="" />
          <p>Get Upto 30% Off Using POPcoins</p>
        </div>
      </div>
    </div>
  )
}

export default Footer