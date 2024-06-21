// Header 컴포넌트 정의
const Try = ({ children }: { children: any }) => {
  return <div className="try">{children}</div>
}

// Try.Left 컴포넌트 정의
Try.Left = ({ children }: { children: any }) => {
  return <div className="try-left">{children}</div>
}

// Try.Right 컴포넌트 정의
Try.Right = ({ children }: { children: any }) => {
  return <div className="try-right">{children}</div>
}

export default Try
