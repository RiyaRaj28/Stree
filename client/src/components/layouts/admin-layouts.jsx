import { NavLink, Outlet } from "react-router-dom";
import '../../../src/adminlayout.css';
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

function AdminLayout() {
    return (
        <>
            <div className="container" style={{ paddingTop: "7rem" }}>
                <nav>
                    <ul>
                        <li><NavLink to="/" activeClassName="active"><IoMdHome style={{ color: "magenta" }} /> Home </NavLink></li>
                        <li><NavLink to="/admin/users" activeClassName="active"><FaUser style={{ color: "magenta" }} /> Users </NavLink></li>
                        <li><NavLink to="/admin/incidents" activeClassName="active"><MdOutlineSportsKabaddi style={{ color: "magenta" }} /> Incidents </NavLink></li>
                        <li><NavLink to="/admin/contacts" activeClassName="active"><MdMessage style={{ color: "magenta" }} /> Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default AdminLayout;
