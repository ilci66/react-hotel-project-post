import room1pic from '../images/room1.jpg'
import room2pic from '../images/room2.jpg'
import room3pic from '../images/room3.jpg'
import room4pic from '../images/room4.jpg'
import room5pic from '../images/room5.jpg'
import room6pic from '../images/room6.jpg'

const rooms = [
  { id:1, src: room1pic, info:"A cozy room for 2", name:"Twin", people: 2, dailyPrice:100, availableFor: 7 },
  { id:2, src: room2pic, info:"A cozy room for 2", name:"Desert", people: 4, dailyPrice:150,  availableFor: 10 },
  { id:3, src: room3pic, info:"A cozy room for 2", name:"Standard", people: 2, dailyPrice:200,  availableFor: 20 },
  { id:4, src: room4pic, info:"A cozy room for 2", name:"Villa", people: 4, dailyPrice:100,  availableFor: 5 },
  { id:5, src: room5pic, info:"A cozy room for 2", name:"Open", people: 2, dailyPrice:50,  availableFor: 30 },
  { id:6, src: room6pic, info:"A cozy room for 2", name:"Suite", people: 2, dailyPrice:250,  availableFor: 14 },
];

export default rooms