import parisBg from "./assets/images/paris-bg.jpg";
import pisaBg from "./assets/images/pisa-bg.jpg";
import tajMahalBg from "./assets/images/tajmahal-bg.jpg";
import colesseumBg from "./assets/images/colesseum-bg.jpg";

import {MdOutlinePlace} from 'react-icons/md';

function App() {
  return (
    <div className="flex items-center justify-center h-full container mx-auto p-5">
      {/* <h1 className="absolute top-5 text-4xl mb-3 text-center font-oxygen leading-7 font-meduim text-gray-800">Historical Building in the World</h1> */}
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {/* CARD 1 */}
        <div className="card">
          <div className="p-8 flex flex-col">
            <div className="image">
              <img src={parisBg} alt="" className="img-hover" />
            </div>
            <h5 className="title">Eiffel Tower</h5>
            <p className="para">
              The Eiffel Tower is a wrought-iron lattice tower on the Champ de
              Mars in Paris, France. Constructed from 1887, it is named after
              the engineer Gustave Eiffel, whose company designed and built the
              tower. Locally nicknamed "La dame de fer", it was constructed from
              1887 to 1889 as the centerpiece of the 1889 World's Fair.
            </p>

            <div className="flex items-center gap-2 mt-8 text-gray-500 text-lg lg:text-md md:text-lg">
              <span><MdOutlinePlace/></span>
              <p className="font-medium font-oxygen">Paris, France</p>
            </div>
          </div>
        </div>

        {/* CARD 2*/}
        <div className="card">
          <div className="p-8 flex flex-col">
            <div className="image">
              <img src={pisaBg} alt="" className="img-hover" />
            </div>
            <h5 className="title">Leaning Tower of Pisa</h5>
            <p className="para">
              The Leaning Tower of Pisa, or simply, the Tower of Pisa, is the
              campanile, or freestanding bell tower, of Pisa Cathedral. It is
              known for its nearly four-degree lean, the result of an unstable
              foundation.
            </p>

            <div className="flex items-center gap-2 mt-24 text-gray-500 text-lg lg:text-md md:text-lg md:mt-[130px] lg:mt-[115px]">
              <span><MdOutlinePlace/></span>
              <p className="font-medium font-oxygen">Province of Pisa, Italy</p>
            </div>
          </div>
        </div>

        {/* CARD 3*/}
        <div className="card">
          <div className="p-8 flex flex-col">
            <div className="image">
              <img src={tajMahalBg} alt="" className="img-hover" />
            </div>
            <h5 className="title">Taj Mahal</h5>
            <p className="para">
              An immense mausoleum of white marble, built in Agra between 1631
              and 1648 by order of the Mughal emperor Shah Jahan in memory of
              his favourite wife, the Taj Mahal is the jewel of Muslim art in
              India and one of the universally admired masterpieces of the
              world's heritage.
            </p>

            <div className="flex items-center gap-2 mt-14 text-gray-500 text-lg lg:text-md md:text-lg">
              <span><MdOutlinePlace/></span>
              <p className="font-medium font-oxygen">Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
