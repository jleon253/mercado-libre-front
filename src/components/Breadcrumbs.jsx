import React, {useContext, useEffect, useState} from 'react';

import {ProductsContext} from '../context/ProductsContext';

const Breadcrumbs = () => {

  const {breadcrumbs} = useContext(ProductsContext);
  const [values, setValues] = useState([])

  useEffect(() => {
    if(breadcrumbs !== null) {
      if(breadcrumbs.length > 0) {
        setValues(breadcrumbs[0].values[0].path_from_root)
      } else {
        setValues(null)
      }
    }
  }, [breadcrumbs, values])

  return (
    <div className="d-flex breadcrumbs">
      {values ? values.map(value => (<a href="!#" key={value.id} className="breadcrumbs__item small-size">{value.name}</a>)) : null}
    </div>
  );
};

export default Breadcrumbs;