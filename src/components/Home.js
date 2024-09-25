import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux'

const Home = () => {
  const dispatch = useDispatch()
  const amount = useSelector (state => state.amount)
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <>
    <div>
        <h2> Deposit / Withdraw Money</h2>
        <button className='btn btn-primary mx-3'onClick={()=>{withdrawMoney(100)}}> - </button>
           Update Balnce ({amount})
        <button className='btn btn-primary mx-3'onClick={()=>{depositMoney(100)}}> + </button>
    </div>
    </>
  )
}

export default Home 