import './App.css'
import { Fejlec } from './fejlec'
import { NepszeruSportok } from './nepszeruSportok'
import { ASportokElonyei } from './aSportokElonyei'
import { Kepgaleria } from './kepgaleria'
import { MiertFontosASport } from './miertFontosASport'
import { Lablec } from './lablec'

function App() {
  return (
    <div>
      <Fejlec />
      <br />
      <NepszeruSportok />
      <br />
      <ASportokElonyei />
      <br />
      <Kepgaleria />
      <br />
      <MiertFontosASport />
      <br />
      <Lablec />
    </div>
  )
}

export default App