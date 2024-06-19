import './App.css'

import Text from '@shared/Text'
import { useAlertContext } from './contexts/AlertContext'
import Button from './components/shared/Button'

function App() {
  const { open } = useAlertContext()
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        야호!
      </Text>
      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요',
            onButtonClick: () => {
              //
            },
          })
        }}
      >
        오픈!
      </Button>
    </div>
  )
}

export default App
