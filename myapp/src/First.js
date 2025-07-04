import Reaxct from 'react'
import logo from './logo.svg';
import gift1 from './gift1.png';
import './Cards.css'

function First() {
    return (
        <>
        
            <div class="basic-tags">
                <h1>THIS IS BASIC TAG</h1>                      
                <p>THIS IS BASIC TAG</p>
                <b>THIS IS BASIC TAG</b>
                <em>THIS IS BASIC TAG</em>
                <sup>THIS IS BASIC TAG</sup>
                <del>THIS IS BASIC TAG</del>
                <hr />
                <table border="1">
                    <thead>
                        <tr>
                            <td> Sr.no</td>
                            <td> Name</td>
                            <td> Phone.no</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Parth</td>
                            <td>857297834</td>
                        </tr>
                    </tbody>
                </table>
                <hr></hr>
                <img src={logo} className='logo' alt='logo' height='300' width='300' ></img>
                <hr></hr>
                <form>
                    <label for="Fullname"> Enter Full Name</label>
                    <input type="text" id="name" name="Fullname" placeholder="fullname" />

                    <label for="email">Enter Your Email</label>
                    <input type="email" id="email" name="Email" placeholder="Enter Your Email" />

                    <label for="Password"> Password </label>
                    <input type="Password" id="password" name="Password" placeholder="ENTER YOU PASSWORD" />

                    <label for="Mobile">Mobile Number</label>
                    <input type="tel" id="" name="" placeholder="ENTER YOU MOBILE NUMBER" />

                    <label>DATE</label>
                    <input type="date" id="date" placeholder="" />

                    <label>GENDER</label>
                    <input type="radio" id="101" name="GENDER" value="Male" /> MALE
                    <input type="radio" id="102" name="GENDER" value="Female" /> Female
                    <br />
                    <label>Address</label>
                    <textarea placeholder="ENTER YOUR Address"></textarea>
                    <br />

                    <label>SELECT YOU COUNTRY</label>
                    <select>Select your country </select>
                    <select />
                </form>
                <hr></hr>
            </div>
            
            <div class="grid"></div>
            <div class="card">
                <img src={gift1} className='gift1' class='hello' style={{ width: '100px', height: '100px' }} alt="forest" />
                <div class="card-content">
                    <h2 class="title"  >Amazon Pay Gift Card of worth ₹1,000</h2>
                    <u>
                        <hr />
                        <p class="card-text">Hope you enjoy this Amazon Pay Gift Card!</p>
                        <a href="#" class="card-button">Buy More!</a>
                    </u>
                </div>
            </div>
       
            
        </>

    )
}

export default First
