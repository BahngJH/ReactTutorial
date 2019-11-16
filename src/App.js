import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '성순',
  'birthday' : '특징:븅신',
  'gender' : '남자',
  'job' : '프로그래머',
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이순신',
  'birthday' : '880322',
  'gender' : '남자',
  'job' : '명장',
},{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '아이린',
  'birthday' : '940712',
  'gender' : '여자',
  'job' : '아이돌',
}]

function App() {
  return (
    //<Customer id={customes.id} image={customes.image} name={customes.name} birthday={customes.birthday} gender={customes.gender} job={customes.job}/>
    <div>
      { customers.map(c => { return ( <Customer key={c.id} id={c.id} name={c.name} image={c.image} job={c.job} gender ={c.gender} birthday={c.birthday} />)})}
    </div>
  );
}

export default App;
