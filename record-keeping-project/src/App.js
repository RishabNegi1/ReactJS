import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function App() {
  const [name, setName] = useState("abc");
  const [email, setEmail] = useState("abc@gmail.com");
  const [phone, setPhone] = useState(1234567890);
  const [data, setData] = useState([]);
  function na(event) {
    setName(event.target.value);
  }
  function em(event) {
    setEmail(event.target.value);
  }
  function ph(event) {
    setPhone(event.target.value);
  }
  function bt() {
    setData([...data, { name, email, phone }])
    setName("abc");
    setEmail("abc@gmail.com");
    setPhone(1234567890);
  }
  function removeItem(index){
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
      {/*--Form--*/}
      <div className='box'>
        <Stack spacing={2} direction="row">
          <TextField value={name} onChange={na} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={em} id="outlined-basic" label="Email-Add" variant="outlined" />
          <TextField value={phone} onChange={ph} id="outlined-basic" label="Phone-No." variant="outlined" />
          <Button onClick={bt} variant="contained" color="success"><DownloadDoneIcon /></Button>
        </Stack>
      </div>
      {/*--Show-Data--*/}
      <div className='data'>
        <div className='display'>
          <h3>Name</h3>
          <h3>Email-Add</h3>
          <h3>Phone-No.</h3>
          <h3>Remove</h3>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className='display'> 
              <h3>{element.name}</h3>
              <h3>{element.email}</h3>
              <h3>{element.phone}</h3>
              <Stack>
              <Button onClick={()=> removeItem(index)} variant="contained" color="error"><DeleteForeverIcon/>
              </Button>
              </Stack>
              </div>
              )
          })}
      </div>
    </div>
  );
}

export default App;
