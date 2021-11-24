import React , {useState} from 'react';
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import Axios from 'axios';

function SearchBar() {
    
    const [keyWord, setKeyWord] = useState("");
    const [status, setStatus] = useState([]);
    const [id, setId] = useState([]);
    const [booked, setBooked] = useState([]);

    
    const search = () => {
        Axios.post('http://localhost:3001/search', {
          keyWord: keyWord
        }).then((response) => { 
            setStatus(response.data);
        });
    };

    const choose = (physician_id) => {
        Axios.post('http://localhost:3001/availability', {
            physician_id: physician_id
        }).then((response) => {
            setId(response.data)
        })
    }





    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Name of physicians" onChange={(event) => {
                    setKeyWord(event.target.value);
                }} />
                <button className="searchIcon" onClick={search} ><SearchIcon  /></button>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Expertise</th>
                        <th>Selection</th>
                    </tr>
                </thead>
                <tbody>
                    {status.map((item) => {
                        return (
                            <tr>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.expertise}</td>
                                <td><button onClick={() => { choose(item.physician_id); } }>Choose</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Seletion</th>
                    </tr>
                </thead>
                <tbody>
                    {id.map((item, index) => {
                        const d = new Date(item.app_date);
                        index++;

                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{d.toUTCString().slice(0,16)}</td>
                                <td>{item.start_time.slice(0,5)}</td>
                                <td>{item.end_time.slice(0,5)}</td>
                                <td><button>Book</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>


           
        </div>
    )
}

export default SearchBar;