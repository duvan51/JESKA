import React from 'react'
import Image from '../pages/Tienda/Images/2.png'







const Home_search = () => {
  return (
    <div className='Home_search'>
      <div className='Home_nav'>
        <div className='Home_nav_main'>
            <div className='Home_nav_main_one'>
                <div className='Home_nav_main_one_r'>
                    <p>busqueda</p>
                    <p>1.432.370</p>
                </div>    
            </div>
            <div className='Home_nav_main_two'>
                <div>envio gratis</div>
                <div>envio gratis</div>
                <div>envio gratis</div>
                <div>envio gratis</div>
            </div>
            <div className='Home_nav_main_three'>
                <h3>Categorias</h3>
                <div className='Home_nav_main_three_items'>
                    <div className='cat'>categoria two</div>
                    <div className='cat'>categoria two</div>
                    <div className='cat'>categoria two</div>
                    <div className='cat'>categoria two</div>
                    <div className='cat'>categoria two</div>
                </div>
            </div>
        </div>
      </div>
      <div className='Home_filt'>
        <div className='Home_filt_main'>
            <div className='Home_filt_main_header'>
             header - header - header
            </div>
            <div className='Home_filt_main_body'>
              <div className='Home_filt_main_body_item'>
                <div className='Home_filt_main_body_item_'>
                  <div className='Home_filt_main_body_item_img'>
                    <div className='Home_filt_main_body_item_img_'>
                      <img src={Image} />
                    </div>
                  </div>
                  <div className='Home_filt_main_body_item_body'>
                    <div className='Home_filt_main_body_item_body_'>
                      <h2>name of product</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='Home_filt_main_body_item'>
                2 item
              </div>
              <div className='Home_filt_main_body_item'>
                3 item
              </div>
            </div>     
        </div>
      </div>
    </div>
  )
}

export default Home_search
