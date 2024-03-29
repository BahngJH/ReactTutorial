import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX:"auto"
  },
  table:{
    minWidth: 1080
  }
})

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
  //const {classes} = this.props;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customers.map(c => { return ( <Customer key={c.id} id={c.id} name={c.name} image={c.image} job={c.job} gender ={c.gender} birthday={c.birthday} />)})}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
