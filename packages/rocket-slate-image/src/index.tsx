import React from 'react'

import Image from "./Image"
// @ts-ignore
addElement("wysisyg", "image", ({attributes, children}) => {
  return <Image {...attributes} />
})

import onKeyDown from "./onKeyDown"
export function withImage(editor) {

}
