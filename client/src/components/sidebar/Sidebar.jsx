import "./sidebar.css"
import {RssFeed, Publish, FolderSpecial, Event, People} from "@material-ui/icons"
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <RssFeed className="sidebarIcon"/>
                      <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                      <Publish className="sidebarIcon"/>
                      <span className="sidebarListItemText">Submissions</span>
                    </li>
                    <li className="sidebarListItem">
                      <FolderSpecial className="sidebarIcon"/>
                      <span className="sidebarListItemText">Projects</span>
                    </li>
                    <li className="sidebarListItem">
                      <Event className="sidebarIcon"/>
                      <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                      <People className="sidebarIcon"/>
                      <span className="sidebarListItemText">Groups</span>
                    </li>
                    
                </ul>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                      {Users.map((u)=>(
                        <CloseFriend key={u.id} user={u}/>
                      ))}
                </ul>
            </div>
        </div>
    );
}