import "./sidebar.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Dashboard</h3>
                    <ul className="sidebarList active">
                        <li className="sidebarListItem">
                            <HomeRoundedIcon className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentRoundedIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <StorageRoundedIcon className="sidebarIcon"/>
                            Data
                        </li>
                    <h3 className="sidebarTitle"> Analyze Data </h3>
                    <ul className="sidebarList active">
                        <li className="sidebarListItem">
                            <ImportExportRoundedIcon className="sidebarIcon"/>
                            Upload
                        </li>
                        <li className="sidebarListItem">
                            <TrackChangesRoundedIcon className="sidebarIcon"/>
                            Changes
                        </li>
                        <li className="sidebarListItem">
                            <AddRoundedIcon className="sidebarIcon"/>
                            Add
                        </li>
                    <h3 className="sidebarTitle"> Analyze Data </h3>
                    <ul className="sidebarList active">
                        <li className="sidebarListItem">
                            <ImportExportRoundedIcon className="sidebarIcon"/>
                            Make a Report
                        </li>
                        <li className="sidebarListItem">
                            <TrackChangesRoundedIcon className="sidebarIcon"/>
                            Changes
                        </li>
                        <li className="sidebarListItem">
                            <AddRoundedIcon className="sidebarIcon"/>
                            Add
                        </li> 
                        <h3 className="sidebarTitle"> Analyze Data </h3>
                    <ul className="sidebarList active">
                        <li className="sidebarListItem">
                            <ImportExportRoundedIcon className="sidebarIcon"/>
                            Exchange
                        </li>
                        <li className="sidebarListItem">
                            <TrackChangesRoundedIcon className="sidebarIcon"/>
                            Changes
                        </li>
                        <li className="sidebarListItem">
                            <AddRoundedIcon className="sidebarIcon"/>
                            Add
                        </li> 
                    </ul> 
                    </ul> 
                    </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}
