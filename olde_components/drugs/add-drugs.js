import React, { Component } from 'react'

export class DrugsAdd extends Component {
  render() {
    return (
      <>
          <div className="grandmother">
        <div className="request-tip">
            <button className="request-tip-style1"> إضافة دواء </button>
            <button className="request-tip-style">الادوية</button>
        </div>
        <div className="request-body">
            <div className="add-drugs">
                <span>
                    <h2>اسم الدواء</h2>
                    <input type="text" value="ادخل اسم الدواء"/>
                </span>
                <span>
                    <h2>اسم الشركة المصنعة</h2>
                    <input type="text" value="ادخل اسم الشركة المصنعة"/>
                </span>
                <button>إضافة</button>
            </div>
        </div>
    </div>
      </>
    )
  }
}

export default DrugsAdd