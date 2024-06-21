import Try from '@/components/shared/Try'
import { css } from '@emotion/react'

const tryStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  padding: 10px;
`

const PracticePage = () => {
  return (
    <Try style={tryStyle}>
      <Try.Left>왼쪽입니다!</Try.Left>
      <Try.Mid>가운데입니다!</Try.Mid>
      <Try.Right>오른쪽입니다!</Try.Right>
    </Try>
  )
}

export default PracticePage
