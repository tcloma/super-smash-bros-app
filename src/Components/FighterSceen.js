const FighterScreen = ({ selectedFighter }) => {
  return (
    <div id='fighter-screen'>
      <img src={''} alt='fullscreen fighter' className="char-model"/>
      <h3 className="char-name"> {selectedFighter} </h3>
    </div>
  )
}
export default FighterScreen;