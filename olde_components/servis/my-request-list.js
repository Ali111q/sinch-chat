import React, { Component } from 'react'

export class MyRequestList extends Component {
  render() {
    return (
      <>
    <div className="grandmother">
        <div className="request-tip">
            <button className="request-tip-style1">حجز موعد </button>
            <button className="request-tip-style">استشاره</button>

        </div>
        <div className="request-body">
            <div className="request-list-scroll-s1" id="style1">

                <ul className="request-list-scroll" >
                    <a href="">
                        <span className="patient-img">
                            <img src="../home/lady.png" alt=""/>
                        </span>
                        <span className="patient-body">
                            <h2>طه</h2>
                            <p>مسمى وضيفي </p>
                        </span>
                        <button className="patient-button12">تم الموافق</button>
                    </a>
                    <a href="">
                        <span className="patient-img">
                            <img src="../home/lady.png" alt=""/>
                        </span>
                        <span className="patient-body">
                            <h2>طه</h2>
                            <p>مسمى وضيفي </p>
                        </span>
                        <button className="patient-button22">تم الموافق</button>
                    </a>
                    <a href="">
                        <span className="patient-img">
                            <img src="../home/lady.png" alt=""/>
                        </span>
                        <span className="patient-body">
                            <h2>طه</h2>
                            <p>مسمى وضيفي </p>
                        </span>
                        <button className="patient-button32">تم الموافق</button>
                    </a>
                    <a href="">
                        <span className="patient-img">
                            <img src="../home/lady.png" alt=""/>
                        </span>
                        <span className="patient-body">
                            <h2>طه</h2>
                            <p>مسمى وضيفي </p>
                        </span>
                        <button className="patient-button12">تم الموافق</button>
                    </a>
                    <a href="">
                        <span className="patient-img">
                            <img src="../home/lady.png" alt=""/>
                        </span>
                        <span className="patient-body">
                            <h2>طه</h2>
                            <p>مسمى وضيفي </p>
                        </span>
                        <button className="patient-button12">تم الموافق</button>
                    </a>
                    <a href="">
                        <span className="patient-img">
                            <img src="../home/lady.png" alt=""/>
                        </span>
                        <span className="patient-body">
                            <h2>طه</h2>
                            <p>مسمى وضيفي </p>
                        </span>
                        <button className="patient-button12">تم الموافق</button>
                    </a>
                </ul>
            </div>

        </div>

    </div>

      </>
    )
  }
}

export default MyRequestList
