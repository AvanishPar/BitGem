import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import {useSelector} from 'react-redux'
import {TableMain} from './style'

function TableComponent(){
  const winner = useSelector((state) => state.common.winner);
  const [data,setData]=useState({
  })
  const count = {};

  useEffect(()=>{
    winner.forEach(element => {
      count[element.name] = (count[element.name] || 0) + 1;
      setData(count)
      console.log(element);
    });
    console.log(count,'count');
  },[winner])

  let pp = winner.filter( (ele, ind) => ind === winner.findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))

const win=(x)=>{
  return(
    <div>
    {data[x]?data[x]:1}
    </div>
  )
}
    return(
      <TableMain>
    <div>
    <div >
    <Table  responsive="md">
    <thead > 
      <tr style={{borderStyle:"hidden"}}> 
        <th>Item You have</th>
        <th>% Chance</th>
        <th>Qty</th>      
      </tr>
    </thead>
    <tbody >  
    {pp.map((value) =>
           <tr style={{borderStyle:"hidden"}}>
           <td>{value.name}</td>
           <td>{value.percent}</td>
           <td>{win(value.name)}</td>
         </tr>
      )}
    </tbody>
  </Table>
        </div>
        </div>
        </TableMain>
    )
}
export default TableComponent