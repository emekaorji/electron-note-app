import image1 from '../../assets/images/background1.jpg';
import image2 from '../../assets/images/background2.jpg';
import image3 from '../../assets/images/background3.jpg';
import image4 from '../../assets/images/background4.jpg';
import image5 from '../../assets/images/background5.jpg';
import image6 from '../../assets/images/background6.jpg';
import image7 from '../../assets/images/background7.jpg';

type ColorsType = {
  [key: string]: string;
};

const colors: ColorsType = {
  color1: '#778491',
  color2: 'red',
  color3: 'green',
  color4: 'blue',
  color5: 'grey',
  color6: 'pink',
  color7: 'purple',
  background1: image1,
  background2: image2,
  background3: image3,
  background4: image4,
  background5: image5,
  background6: image6,
  background7: image7,
};

export default colors;
