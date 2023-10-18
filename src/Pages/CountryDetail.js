import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getCountryDetail } from '../Services';
import './CountryDetail.css';
 
export default function CountryDetail(props) {
    const { countryCode } = useParams();
    const [detail, setDetail] = useState({});
    const [fl, setfl] = useState("");
    const [f2, setf2] = useState("");
    const [f3, setf3] = useState("");
    const [f4, setf4] = useState("");
    const [f5, setf5] = useState("");
    const [f6, setf6] = useState("");
    const [f7, setf7] = useState("");
    const [f8, setf8] = useState("");
    
    useEffect(() => {
        getCountryDetail(countryCode).then(result => {
            console.log("result.data", result.data);
            setDetail(result.data);
            setfl(result.data[0]["flags"]["png"])
            setf2(result.data[0]["name"]["common"])
            setf3(result.data[0]["capital"]["0"])
            setf4(result.data[0]["population"])
            setf5(result.data[0]["area"])
            setf6(result.data[0]["car"]["side"])
            setf7(result.data[0]["timezones"])
            setf8(result.data[0]["subregion"])
        })
    }, [countryCode]);

    console.log("countryCode: ", countryCode);
    // console.log(detail.flags.png)
    return(
        <div className='country-detail-wrapper'>
            {/* <div>
             <img src={fl}/> 
            </div>
            <div>
                <div>Name: {f2}</div>
                <div>Capital: {f3}</div>
                <div>Population: {f4}</div>
                <div>Area: {f5} sq.km</div>
            </div> */}
            <div style={{margin: 'auto', topmargin: '100px'}}>
                <img src={fl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"><b>Country : {f2}</b></h5>
                        {/* <p className="card-text"></p> */}
                        <p className="card-text">Capital : {f3}</p>
                        <p className="card-text">Population : {f4}</p>
                        <p className="card-text">Area : {f5} sq.km</p>
                        <p className="card-text">Car Side : {f6}</p>
                        <p className="card-text">Timezone : {f7}</p>
                        <p className="card-text">Subregion : {f8}</p>
                    </div>
            </div>
        </div>
    )
}

