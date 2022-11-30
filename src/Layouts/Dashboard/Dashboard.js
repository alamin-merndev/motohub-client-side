import { Sidebar } from "flowbite-react";
import React, { useContext, useState } from "react";
import { FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import FooterMain from "../../Pages/Shared/FooterMain/FooterMain";
import Header from "../../Pages/Shared/Header/Header";
import { AiOutlineCar } from "react-icons/ai";
import useRole from "../../Hooks/useRole";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import {
  Delete,
  DirectionsCarOutlined,
  Inventory2Outlined,
  SellRounded,
  ShoppingBagOutlined,
  StorefrontOutlined,
} from "@mui/icons-material";
import TittleHeader from "../../Pages/Shared/TittleHeader/TittleHeader";
import { Button } from "@mui/material";

const Dashboard = () => {
  const { user, buyer, seller } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  const userRole = role.role;

  return (
    <div>
      <Header></Header>
      <TittleHeader title={"Dashboard"}></TittleHeader>
      <div className="container border flex justify-center gap-12 mx-auto">
        {userRole === "seller" && (
          <>
            <NavLink to="/dashboard/add-product">
              <Button>
                <DirectionsCarOutlined className="inline mr-2"></DirectionsCarOutlined>
                Add Product
              </Button>
            </NavLink>

            <NavLink to="/dashboard/my-products">
              <Button>
                <Inventory2Outlined className="inline mr-2"></Inventory2Outlined>
                My Products
              </Button>
            </NavLink>
          </>
        )}
        {userRole === "admin" && (
          <>
            <NavLink to="/dashboard/sellers">
              <Button>
                <StorefrontOutlined className="inline mr-2"></StorefrontOutlined>
                All Sellers
              </Button>
            </NavLink>
            <NavLink to="/dashboard/all-buyers">
              <Button>
                <ShoppingBagOutlined className="inline mr-2"></ShoppingBagOutlined>
                All Buyers
              </Button>
            </NavLink>
          </>
        )}
        {userRole === "buyer" && (
          <>
            <NavLink to="/dashboard/my-orders">
              <Button>
                <Inventory2Outlined className="inline mr-2"></Inventory2Outlined>
                My Orders
              </Button>
            </NavLink>
          </>
        )}
      </div>
      <div className="container mx-auto py-5">
        <Outlet></Outlet>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default Dashboard;
