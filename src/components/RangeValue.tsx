'use client'

import { useState } from "react"
import { ChangeEvent } from 'react';
import React from 'react'

import style from "../styles/MainContent.module.css";

export default function RangeValue() {
  const [rangeValue, setRangeValue] = useState(500)
  
  const showRangedPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value))
  }
  
  return (
    <div className={style.maxPrice_input}>
      <input onChange={showRangedPrice} type='range' value={rangeValue} max='5000' min='500' step='1'/>
      <span>{rangeValue} R$</span> 
    </div>
  )
}