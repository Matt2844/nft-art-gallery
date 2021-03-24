import React from 'react'
import Profile from './Profile'
import { Animated } from "react-animated-css";

export default function Photographers () {

  return (
    <div className="photographers-wrap-all">
      <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
        <Profile name={'Sam'} />
      </Animated>
      <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
        <Profile name={'Sally'} />
      </Animated>
      <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
        <Profile name={'Ben'} />
      </Animated>
      <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
        <Profile name={'Joe'} />
      </Animated>
      <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
        <Profile name={'Sue'} />
      </Animated>
    </div>
  )
}