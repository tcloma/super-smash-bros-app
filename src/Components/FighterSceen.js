const FighterScreen = ({ selectedFighter, fighters }) => {
  return (
    <div id='fighter-screen' style={{ backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${selectedFighter.toLowerCase()}/bg.jpg)`, backgroundSize: 'cover'}}>
      {/* <button className="close-focus"> X </button> */}
      <img src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedFighter.toLowerCase()}/main.png`} alt='fullscreen fighter' className="char-model"/>
      <h3 className="char-name"> {selectedFighter} </h3>
      <h3 className="char-name-bg"> {selectedFighter} </h3>
    </div>
  )
}
export default FighterScreen;