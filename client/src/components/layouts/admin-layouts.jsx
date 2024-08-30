import { NavLink, Outlet } from "react-router-dom";
import '../../../src/adminlayout.css';
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

function AdminLayout() {
    return (
        <>
            <header>
                <div className="container" style={{ padding: "15rem" }}>
                    <nav>
                        <ul>
                            <li><NavLink to="/"> <IoMdHome style={{ color: "magenta" }} /> Home </NavLink></li>
                            <li>
                                <NavLink to="/admin/users">
                                    <FaUser style={{ color: "magenta" }} /> Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/incidents">
                                    <MdOutlineSportsKabaddi style={{ color: "magenta" }} /> Incidents
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contact">
                                    <MdMessage style={{ color: "magenta" }} /> Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default AdminLayout;

