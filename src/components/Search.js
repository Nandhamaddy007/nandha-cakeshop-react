import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cake from './Cake';
import Loader from 'react-loader-spinner';
export default function Search(props) {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  var query = searchQuery.get('q');
  useEffect(() => {
    setLoading(true);
    setResults([]);
    axios
      .get('https://apifromashu.herokuapp.com/api/searchcakes?q=' + query)
      .then(
        (res) => {
          console.log(res.data.data);
          setResults(res.data.data);
          setLoading(false);
        },
        (err) => {
          console.log(err);
          setLoading(false);
        }
      );
  }, [query]);
  return (
    <div>
      Search {query}
      {loading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          //3 secs
        />
      ) : null}
      <div className="row">
        {results.map((cake, index) => {
          cake.index = index;
          return (
            <Cake
              key={index}
              //DeleteCake={props.DeleteCake}
              cake={cake}
              // editable={editable}
            />
          );
        })}
      </div>
    </div>
  );
}
