import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import amazonLogo from "./amazon_logo.png";
import { DataContext } from "../DataProvider/DataProvider";



const Header = ()=>{
  
  const [{basket},dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)


  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={amazonLogo} alt="amazon logo" />
          </Link>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>

          <input type="text" placeholder="serch amazon" />
          <BsSearch size={35} />
        </div>

        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
              alt=""
            />

            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to="">
            <p>Sign In</p>
            <span>Accounts & Lists</span>
          </Link>

          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart}>
            <BsCart3 size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
