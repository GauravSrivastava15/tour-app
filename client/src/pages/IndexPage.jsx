import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function IndexPage() {
  const [places, setPlaces] = useState([])
  useEffect(() =>{
    axios.get('/places').then(response =>{
      setPlaces(response.data)
    })
  },[])
  return (
    <div className="mt-8 mx-6 gap-x-7 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 && places.map(place =>(
        <Link key={place._id} to={'/place/'+place._id} >
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {place.photos?.[0] && (
              <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:8080/uploads/'+place.photos?.[0]} />
            )}

          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1"> 
            <span className="font-bold">Rs{place.price}</span> per night
          </div>
        
      </Link >
      ))}

    </div>
    
  );
}
