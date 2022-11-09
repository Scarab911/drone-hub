import React from 'react';
import { MyArrays } from '../../services/services.js';

export default function ServiceInfo() {
  const arrays = new MyArrays();
  console.log(arrays.allServices);
  return <div>ServiceInfo</div>;
}
