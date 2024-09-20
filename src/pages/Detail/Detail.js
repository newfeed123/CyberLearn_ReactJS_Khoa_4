import React from 'react'

export default function Detail(props) {
  return (
    <div>
        giá trị tham số: {props.match.params.id}
    </div>
  )
}
