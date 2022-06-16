import Button from './Button'

type HeaderProps = {
  text: string
}

const Header = ({text}: HeaderProps) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header>
      <h1>{ text }</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

export default Header
