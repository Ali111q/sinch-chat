import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class AddSecretary extends Component {
  render() {
    return (
     <>
      <div class="setingcontant-secretary">
      <Link className='ali-rad'>إضافة محفوظات</Link>

        <div class="secretary-resolt-list" id="style-1">
          <div class="secretary-resolt-scroll">
            <div>
              <span id="display-flex-set">
                <img src="lady.png" alt="" />

                <span>
                  <h1>عزيزة محمد</h1>
                  <p>طبيب</p>
                </span>
              </span>
              <button class="button-list-scretary"><h1>سكرتير رئيسي</h1></button>
            </div>
    
          </div>
        </div>
      </div>
     </>
    )
  }
}

export default AddSecretary
