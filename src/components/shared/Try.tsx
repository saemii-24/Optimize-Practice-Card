import React from 'react'
import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

const MidTitle = styled.div`
  font-weight: bold;
  font-size: 10rem;
  color: blue;
`

// Try 컴포넌트 정의
const Try = ({
  children,
  style,
}: {
  children: React.ReactNode
  style: SerializedStyles
}) => {
  return (
    <div css={style} className="try">
      {children}
    </div>
  )
}

// Try 컴포넌트의 서브 컴포넌트 정의
Try.Left = ({ children }: { children: React.ReactNode }) => {
  return <div className="try-left">{children}</div>
}

Try.Mid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="try-mid">
      <MidTitle>중간 타이틀</MidTitle>
      {children}
    </div>
  )
}

Try.Right = ({ children }: { children: React.ReactNode }) => {
  return <div className="try-right">{children}</div>
}

export default Try
