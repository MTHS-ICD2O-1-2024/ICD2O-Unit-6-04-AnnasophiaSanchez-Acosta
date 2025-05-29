// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"
/**
 * This function allows user to get volume by changing url
 */
window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  //
  let radius = params.get("Radius")
  if (radius == null) {
    radius = 0
  }

  // process
  const notRoundedVolume = 4 / 3 * Math.PI * radius ** 3
  const roundedVolume = Math.round(notRoundedVolume * 100) /100

  // output
  document.getElementById("radius").innerHTML = "<p>The radius = " + radius + " cm</p>"
  document.getElementById("volume").innerHTML = "<p>The volume is: " + roundedVolume + " cm³</p>"
}