import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from '@mui/material/Stack';
const Field = (props) => {
  return (
    <div className='display'>
          <h3>{props.name}</h3>
          <h3>{props.email}</h3>
          <h3>{props.phone}</h3>
          <Stack>
          <Button variant="contained" color="error"><DeleteForeverIcon/>
          </Button>
          </Stack>
    </div>
  )
}

export default Field