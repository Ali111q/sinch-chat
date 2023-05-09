import React, { Component } from 'react'

export class MobDrugsAdd extends Component {
  render() {
    return (
      <>
          <div className="grandmother">

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

export default MobDrugsAdd
