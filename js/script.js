// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updatedby Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")

  // process
  const volume = 4 / 3 * Math.PI * radius ** 3
  const dimensions =
    "<ul>\n<li>radius = " +
    radius +
    "</li>\n</ul>"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "volume is: " + volume.toFixed(3) + " mm³"
}