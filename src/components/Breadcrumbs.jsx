import React, {useContext, useEffect, useState} from 'react';

import {ProductsContext} from '../context/ProductsContext';

const Breadcrumbs = () => {

  const {breadcrumbs} = useContext(ProductsContext);
  const [values, setValues] = useState([])

  useEffect(() => {
    if(breadcrumbs !== null) {
      if(breadcrumbs.length > 0) {
        setValues(breadcrumbs[0].values[0].path_from_root)
        console.log('values',values);
      } else {
        setValues(null)
      }
    }
  }, [breadcrumbs, values])

  return (
    <div className="d-flex breadcrumbs">
      {values ? values.map(value => (<a key={value.id} className="breadcrumbs__item">{value.name}</a>)) : null}
    </div>
  );
};

export default Breadcrumbs;